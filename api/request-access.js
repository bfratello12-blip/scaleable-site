const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value) =>
	String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\"/g, "&quot;")
		.replace(/'/g, "&#039;");

module.exports = async function handler(req, res) {
	if (req.method === "OPTIONS") {
		res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type");
		return res.status(204).end();
	}

	if (req.method !== "POST") {
		res.setHeader("Allow", "POST, OPTIONS");
		return res.status(405).json({ error: "Method not allowed" });
	}

	if (!process.env.RESEND_API_KEY) {
		return res.status(500).json({ error: "Missing RESEND_API_KEY" });
	}

	const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};
	const email = payload.email?.trim();
	const storeUrl = payload.storeUrl?.trim();
	const averageRevenue = payload.averageRevenue?.trim() ?? "";
	const channelsInput = payload.channels ?? [];

	if (!email || !storeUrl) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	const selectedChannels = Array.isArray(channelsInput)
		? channelsInput.filter((value) => typeof value === "string")
		: [
				channelsInput.googleAds ? "Google Ads" : null,
				channelsInput.metaAds ? "Meta (Facebook / Instagram)" : null,
				channelsInput.other ? "Other" : null,
				channelsInput.notRunningAds ? "Not running ads yet" : null,
		  ].filter(Boolean);

	const channelList =
		selectedChannels.length > 0
			? selectedChannels.map((channel) => `<li>${escapeHtml(channel)}</li>`).join("")
			: "<li>None selected</li>";

	const otherText =
		!Array.isArray(channelsInput) && channelsInput.other
			? channelsInput.otherText?.trim() ?? ""
			: "";

	const html = `
		<div style="font-family: Arial, sans-serif; color: #0f172a;">
			<h2 style="margin: 0 0 16px;">New ScaleAble Access Request</h2>
			<p style="margin: 0 0 12px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
			<p style="margin: 0 0 12px;"><strong>Store URL:</strong> ${escapeHtml(storeUrl)}</p>
			<p style="margin: 0 0 12px;"><strong>Average Monthly Revenue:</strong> ${escapeHtml(averageRevenue || "Not specified")}</p>
			<div style="margin: 16px 0 8px;"><strong>Advertising Channels:</strong></div>
			<ul style="margin: 8px 0 16px; padding-left: 20px;">
				${channelList}
			</ul>
			<p style="margin: 0;"><strong>Other details:</strong> ${escapeHtml(otherText || "N/A")}</p>
		</div>
	`;

	const text = `New ScaleAble Access Request\n\nEmail: ${email}\nStore URL: ${storeUrl}\nAverage Monthly Revenue: ${averageRevenue || "Not specified"}\nChannels: ${selectedChannels.join(", ") || "None selected"}\nOther details: ${otherText || "N/A"}`;

	try {
		const result = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: process.env.REQUEST_ACCESS_TO_EMAIL || "support@scaleableapp.com",
			replyTo: email,
			subject: "New ScaleAble Access Request",
			html,
			text,
		});

		if (!result?.data?.id) {
			console.error("Resend send failed", result?.error || result);
			return res.status(500).json({ ok: false });
		}

		return res.status(200).json({ ok: true });
	} catch (error) {
		console.error("Resend send failed", error);
		return res.status(500).json({ ok: false });
	}
};

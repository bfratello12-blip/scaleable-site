import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type RequestPayload = {
	email?: string;
	storeUrl?: string;
	averageRevenue?: string;
	channels?: {
		googleAds?: boolean;
		metaAds?: boolean;
		other?: boolean;
		otherText?: string;
		notRunningAds?: boolean;
	};
};

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\"/g, "&quot;")
		.replace(/'/g, "&#039;");

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).json({ error: "Method not allowed" });
	}

	if (!process.env.RESEND_API_KEY) {
		return res.status(500).json({ error: "Missing RESEND_API_KEY" });
	}

	const payload = (req.body ?? {}) as RequestPayload;
	const email = payload.email?.trim();
	const storeUrl = payload.storeUrl?.trim();
	const averageRevenue = payload.averageRevenue?.trim() ?? "";
	const channels = payload.channels ?? {};

	if (!email || !storeUrl) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	const selectedChannels: string[] = [];
	if (channels.googleAds) selectedChannels.push("Google Ads");
	if (channels.metaAds) selectedChannels.push("Meta (Facebook / Instagram)");
	if (channels.other) selectedChannels.push("Other");
	if (channels.notRunningAds) selectedChannels.push("Not running ads yet");

	const channelList =
		selectedChannels.length > 0
			? selectedChannels.map((channel) => `<li>${escapeHtml(channel)}</li>`).join("")
			: "<li>None selected</li>";

	const otherText = channels.other ? channels.otherText?.trim() ?? "" : "";

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
		await resend.emails.send({
			from: "ScaleAble <support@scaleableapp.com>",
			to: "support@scaleableapp.com",
			subject: "New ScaleAble Access Request",
			html,
			text,
		});

		return res.status(200).json({ ok: true });
	} catch (error) {
		return res.status(500).json({ error: "Failed to send email" });
	}
}

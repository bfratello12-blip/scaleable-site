"use client";

import { useMemo, useState } from "react";
import logo from "../assets/9e77f0b9e3f695977cea5c5b951b71cf2270fb05.png";

export type RequestAccessFormProps = {
	variant?: "modal" | "page";
	onSuccess?: () => void;
	onCancel?: () => void;
	bodyScrollRef?: React.RefObject<HTMLDivElement>;
};

type FormState = {
	email: string;
	storeUrl: string;
	averageRevenue: string;
	channels: {
		googleAds: boolean;
		metaAds: boolean;
		other: boolean;
		otherText: string;
		notRunningAds: boolean;
	};
};

const revenueOptions = [
	"Select average revenue",
	"Under $25k",
	"$25k–$100k",
	"$100k–$500k",
	"$500k–$1M",
	"$1M+",
];

export function RequestAccessForm({
	variant = "modal",
	onSuccess,
	onCancel,
	bodyScrollRef,
}: RequestAccessFormProps) {
	const [email, setEmail] = useState("");
	const [storeUrl, setStoreUrl] = useState("");
	const [averageRevenue, setAverageRevenue] = useState(revenueOptions[0]);
	const [googleAds, setGoogleAds] = useState(false);
	const [metaAds, setMetaAds] = useState(false);
	const [other, setOther] = useState(false);
	const [otherText, setOtherText] = useState("");
	const [notRunningAds, setNotRunningAds] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState("");
	const [submitSuccess, setSubmitSuccess] = useState("");

	const isSubmitDisabled = useMemo(
		() => email.trim().length === 0 || storeUrl.trim().length === 0,
		[email, storeUrl]
	);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isSubmitDisabled || isSubmitting) return;

		setIsSubmitting(true);
		setSubmitError("");
		setSubmitSuccess("");

		const payload: FormState = {
			email: email.trim(),
			storeUrl: storeUrl.trim(),
			averageRevenue,
			channels: {
				googleAds,
				metaAds,
				other,
				otherText: other ? otherText.trim() : "",
				notRunningAds,
			},
		};

		try {
			const response = await fetch("/api/request-access", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!response.ok) throw new Error("Request failed");

			setSubmitSuccess("Thanks — we’ll review your store and follow up by email.");
			onSuccess?.();
		} catch (error) {
			setSubmitError("Something went wrong. Please try again in a moment.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const isModal = variant === "modal";

	return (
		<form
			onSubmit={handleSubmit}
			className={
				isModal
					? "flex min-h-0 flex-col overflow-hidden"
					: "flex flex-col"
			}
		>
			{/* Header */}
			<div className="relative overflow-hidden bg-[#e6f0ff]">
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage:
							"linear-gradient(180deg, rgba(76,140,225,0.9) 0%, rgba(150,190,245,0.8) 55%, rgba(255,255,255,1) 100%)",
					}}
				/>

				{onCancel && isModal && (
					<button
						type="button"
						onClick={onCancel}
						aria-label="Close"
						className="absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-slate-500 shadow-sm transition hover:bg-white hover:text-slate-800"
					>
						<svg
							viewBox="0 0 24 24"
							className="h-4 w-4"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				)}

				<div className="relative z-10 px-6 pb-5 pt-7 sm:px-8">
					<div className="flex items-start gap-4">
						<div className="min-w-0">
							<h2 className="mt-4 text-xl font-semibold text-white">
								Get Access to ScaleAble
							</h2>
							<p className="mt-2 text-sm text-slate-700/80">
								See true profit, not just ROAS — powered by your real Shopify data.
							</p>

							<ul className="mt-4 mb-4 space-y-1 text-xs text-slate-700/80">
								<li className="flex items-start gap-2">
									<span className="mt-[3px] inline-block h-2 w-2 rounded-full bg-emerald-500" />
									<span>Profit-first metrics (MER, contribution profit)</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-[3px] inline-block h-2 w-2 rounded-full bg-emerald-500" />
									<span>Shopify as the source of truth</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-[3px] inline-block h-2 w-2 rounded-full bg-emerald-500" />
									<span>Built for scaling paid media</span>
								</li>
							</ul>
						</div>

						<div className="ml-auto shrink-0 pr-1">
							<img
								src={logo}
								alt="ScaleAble"
								className="mt-1 h-9 w-auto rounded-lg object-contain"
							/>
						</div>
					</div>

					<div className="mt-6 border-b border-slate-200" />
				</div>
			</div>

			{/* Body */}
			<div
				ref={bodyScrollRef}
				className={
					isModal
						? "flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 pb-28 pt-8 sm:px-8"
						: "px-6 pb-10 pt-8 sm:px-8"
				}
				style={isModal ? { WebkitOverflowScrolling: "touch" } : undefined}
			>
				<div className="space-y-10">
					<div className="space-y-4 rounded-2xl border border-blue-100/70 bg-blue-50/40 px-5 pb-7 pt-6 shadow-sm">
						<p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
							Store Info
						</p>

						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<label
									htmlFor="request-access-email"
									className="text-sm font-medium text-slate-700"
								>
									Email address <span className="text-rose-500">*</span>
								</label>
								<input
									id="request-access-email"
									type="email"
									required
									value={email}
									onChange={(event) => setEmail(event.target.value)}
									className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-base text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 sm:text-sm"
									placeholder="you@company.com"
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="request-access-store"
									className="text-sm font-medium text-slate-700"
								>
									Shopify store URL <span className="text-rose-500">*</span>
								</label>
								<input
									id="request-access-store"
									type="url"
									required
									value={storeUrl}
									onChange={(event) => setStoreUrl(event.target.value)}
									className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-base text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 sm:text-sm"
									placeholder="https://yourstore.myshopify.com"
								/>
							</div>
						</div>

						<div className="space-y-2 pb-6">
							<label
								htmlFor="request-access-revenue"
								className="text-sm font-medium text-slate-700"
							>
								Average monthly revenue
							</label>
							<select
								id="request-access-revenue"
								value={averageRevenue}
								onChange={(event) => setAverageRevenue(event.target.value)}
								className="h-11 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 text-base text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 sm:text-sm"
							>
								{revenueOptions.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="mt-4 space-y-4">
						<p className="text-sm font-semibold text-slate-700">
							Advertising channels
						</p>

						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<label
								className={`flex items-start gap-3 rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 ${
									googleAds
										? "border-blue-500 bg-blue-50/60 shadow-[0_10px_26px_-20px_rgba(37,99,235,0.45)]"
										: "border-slate-200"
								}`}
							>
								<input
									type="checkbox"
									checked={googleAds}
									onChange={(event) => setGoogleAds(event.target.checked)}
									className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/40"
								/>
								Google Ads
							</label>

							<label
								className={`flex items-start gap-3 rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 ${
									metaAds
										? "border-blue-500 bg-blue-50/60 shadow-[0_10px_26px_-20px_rgba(37,99,235,0.45)]"
										: "border-slate-200"
								}`}
							>
								<input
									type="checkbox"
									checked={metaAds}
									onChange={(event) => setMetaAds(event.target.checked)}
									className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/40"
								/>
								Meta (Facebook / Instagram)
							</label>

							<label
								className={`flex items-start gap-3 rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 ${
									other
										? "border-blue-500 bg-blue-50/60 shadow-[0_10px_26px_-20px_rgba(37,99,235,0.45)]"
										: "border-slate-200"
								}`}
							>
								<input
									type="checkbox"
									checked={other}
									onChange={(event) => setOther(event.target.checked)}
									className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/40"
								/>
								Other
							</label>

							<label
								className={`flex items-start gap-3 rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 ${
									notRunningAds
										? "border-blue-500 bg-blue-50/60 shadow-[0_10px_26px_-20px_rgba(37,99,235,0.45)]"
										: "border-slate-200"
								}`}
							>
								<input
									type="checkbox"
									checked={notRunningAds}
									onChange={(event) => setNotRunningAds(event.target.checked)}
									className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/40"
								/>
								Not running ads yet
							</label>
						</div>

						{other && (
							<div className="space-y-2">
								<label
									htmlFor="request-access-other"
									className="text-sm font-medium text-slate-700"
								>
									Other platform
								</label>
								<input
									id="request-access-other"
									type="text"
									value={otherText}
									onChange={(event) => setOtherText(event.target.value)}
									className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-base text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 sm:text-sm"
									placeholder="Tell us more"
								/>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Footer */}
			<div
				className={
					isModal
						? "sticky bottom-0 border-t border-blue-100/70 bg-white/95 px-6 pb-5 pt-4 backdrop-blur sm:px-8"
						: "mt-6 border-t border-blue-100/70 bg-white/95 px-6 pb-5 pt-4 sm:px-8"
				}
			>
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<div className="text-sm text-slate-500">
						<div>No credit card required until setup is complete.</div>
						<div className="text-xs text-slate-400">
							We’ll review your store and follow up by email.
						</div>
					</div>

					<div className="flex items-center justify-end gap-3">
						{onCancel && (
							<button
								type="button"
								onClick={onCancel}
								className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
							>
								Cancel
							</button>
						)}
						<button
							type="submit"
							disabled={isSubmitDisabled || isSubmitting || Boolean(submitSuccess)}
							className="rounded-lg bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300"
						>
							{isSubmitting ? "Sending..." : "Request Access"}
						</button>
					</div>
				</div>

				<div className="mt-2 text-sm" aria-live="polite">
					{submitSuccess && <p className="text-emerald-600">{submitSuccess}</p>}
					{submitError && !submitSuccess && (
						<p className="text-rose-600">{submitError}</p>
					)}
				</div>
			</div>
		</form>
	);
}

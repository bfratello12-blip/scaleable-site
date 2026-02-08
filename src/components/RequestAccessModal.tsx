import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

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

type RequestAccessModalProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

const revenueOptions = [
	"Select average revenue",
	"Under $25k",
	"$25k–$100k",
	"$100k–$500k",
	"$500k–$1M",
	"$1M+",
];

export function RequestAccessModal({
	open,
	onOpenChange,
}: RequestAccessModalProps) {
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

	useEffect(() => {
		if (!open) {
			return;
		}

		const originalOverflow = document.body.style.overflow;
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onOpenChange(false);
			}
		};
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = originalOverflow;
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [open]);

	if (!open) {
		return null;
	}

	const handleClose = () => {
		setIsSubmitting(false);
		setSubmitError("");
		setSubmitSuccess("");
		onOpenChange(false);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isSubmitDisabled || isSubmitting) {
			return;
		}
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
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error("Request failed");
			}

			setSubmitSuccess("Thanks — we’ll review your store and follow up by email.");
		} catch (error) {
			setSubmitError("Something went wrong. Please try again in a moment.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return createPortal(
		<div className="fixed inset-0 z-50">
			<div
				className="fixed inset-0 bg-black/50 backdrop-blur-sm"
				onClick={handleClose}
			/>
			<div className="fixed inset-0 flex items-start justify-center overflow-hidden px-6 py-6 sm:items-center sm:px-8 sm:py-12">
				<div className="w-[92%] max-w-xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1b3a] via-[#123a7a] to-[#1e57a6] p-[8px] shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)] sm:w-full h-[calc(100dvh-3rem)] max-h-[calc(100dvh-3rem)] sm:h-auto sm:max-h-[85vh]">
					<div className="rounded-[calc(1rem-8px)] bg-white h-full">
						<form
							onSubmit={handleSubmit}
							className="flex min-h-0 h-full max-h-full flex-col overflow-y-auto overscroll-contain rounded-xl border border-transparent bg-white touch-pan-y sm:max-h-[85vh]"
							style={{ WebkitOverflowScrolling: "touch" }}
						>
							<div className="relative overflow-hidden rounded-t-xl bg-[#e6f0ff]">
								<div
									className="absolute inset-0 rounded-t-[1rem] pointer-events-none"
									style={{
										backgroundImage:
											"linear-gradient(180deg, rgba(76,140,225,0.9) 0%, rgba(150,190,245,0.8) 55%, rgba(255,255,255,1) 100%)",
									}}
								/>
								<div className="absolute right-0 top-3 z-20 pr-3">
									<button
										type="button"
										onClick={handleClose}
										aria-label="Close"
										className="inline-flex h-5 w-5 items-center justify-center text-slate-400 transition hover:text-slate-700"
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
								</div>
								<div className="relative z-10 px-8 pb-5 pt-8">
									<div className="flex items-start gap-4 pr-4">
										<div>
											<h2 className="text-xl font-semibold text-white">
												Get Access to ScaleAble
											</h2>
											<p className="mt-2 text-sm text-slate-500">
												See true profit, not just ROAS — powered by your real Shopify data.
											</p>
											<ul className="mt-4 space-y-1 pl-2 text-xs text-slate-500">
												<li className="flex items-start gap-2">
													<svg
														viewBox="0 0 20 20"
														className="mt-0.5 h-4 w-4 fill-emerald-500 text-emerald-500"
														fill="currentColor"
													>
														<path
															fill="#10B981"
															d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.252a1 1 0 0 1-1.42.004L3.29 9.214a1 1 0 1 1 1.42-1.408l3.08 3.104 6.49-6.536a1 1 0 0 1 1.424-.003Z"
														/>
													</svg>
													<span>Profit-first metrics (MER, contribution profit)</span>
												</li>
												<li className="flex items-start gap-2">
													<svg
														viewBox="0 0 20 20"
														className="mt-0.5 h-4 w-4 fill-emerald-500 text-emerald-500"
														fill="currentColor"
													>
														<path
															fill="#10B981"
															d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.252a1 1 0 0 1-1.42.004L3.29 9.214a1 1 0 1 1 1.42-1.408l3.08 3.104 6.49-6.536a1 1 0 0 1 1.424-.003Z"
														/>
													</svg>
													<span>Shopify as the source of truth</span>
												</li>
												<li className="flex items-start gap-2">
													<svg
														viewBox="0 0 20 20"
														className="mt-0.5 h-4 w-4 fill-emerald-500 text-emerald-500"
														fill="currentColor"
													>
														<path
															fill="#10B981"
															d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.252a1 1 0 0 1-1.42.004L3.29 9.214a1 1 0 1 1 1.42-1.408l3.08 3.104 6.49-6.536a1 1 0 0 1 1.424-.003Z"
														/>
													</svg>
													<span>Built for scaling paid media</span>
												</li>
											</ul>
										</div>
										<div className="ml-auto flex items-center pr-0 -mr-12">
											<img
												src="/src/assets/9e77f0b9e3f695977cea5c5b951b71cf2270fb05.png"
												alt="ScaleAble"
												className="mt-1 h-9 w-auto translate-x-6 rounded-lg object-contain"
											/>
										</div>
									</div>
									<div className="h-8" />
									<div className="border-b border-slate-200" />
								</div>
							</div>

							<div className="flex-1 space-y-10 px-7 pb-10 pt-10">
								<div className="space-y-4 rounded-2xl border border-blue-100/70 bg-blue-50/40 px-5 pb-7 pt-6 shadow-sm">
									<p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
										Store Info
									</p>

									<div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-1">
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
												className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
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
												className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
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
											className="h-11 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
										>
											{revenueOptions.map((option) => (
												<option key={option} value={option}>
													{option}
												</option>
											))}
										</select>
									</div>
								</div>

								<div className="space-y-4 px-2 pt-4">
									<p className="px-4 text-sm font-semibold text-slate-700">
										Advertising channels
									</p>

									<div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4">
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
												className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
												placeholder="Tell us more"
											/>
										</div>
									)}
								</div>
							</div>

							<div className="h-8" />

							<div className="mx-3 mb-3 border-t border-blue-100/70 bg-blue-50/30 pb-10 sm:sticky sm:bottom-0">
								<div className="pt-6">
									<div className="flex flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center">
										<p className="text-sm text-slate-500">
											No credit card required until setup is complete.
										</p>
										<div className="flex w-full items-center justify-end gap-3 sm:w-auto">
											<p className="text-xs text-slate-500 mr-auto">
												We’ll review your store and follow up by email.
											</p>
											<button
												type="button"
												onClick={handleClose}
												className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
											>
												Cancel
											</button>
											<button
												type="submit"
												disabled={isSubmitDisabled || isSubmitting || Boolean(submitSuccess)}
												className="rounded-lg bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300"
											>
												{isSubmitting ? "Sending..." : "Request Access"}
											</button>
										</div>
										<div className="mt-3 text-sm" aria-live="polite">
											{submitSuccess && (
												<p className="text-emerald-600">{submitSuccess}</p>
											)}
											{submitError && !submitSuccess && (
												<p className="text-rose-600">{submitError}</p>
											)}
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
}

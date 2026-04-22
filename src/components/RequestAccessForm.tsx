"use client";

import { useMemo, useState } from "react";
import { Check, X, ShieldCheck, Mail } from "lucide-react";
import logo from "../assets/9e77f0b9e3f695977cea5c5b951b71cf2270fb05.png";

export type RequestAccessFormProps = {
variant?: "modal" | "page";
onSuccess?: () => void;
onCancel?: () => void;
bodyScrollRef?: React.RefObject<HTMLDivElement>;
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

const payload = {
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

const channels = [
{ label: "Google Ads", checked: googleAds, set: setGoogleAds },
{ label: "Meta (Facebook / Instagram)", checked: metaAds, set: setMetaAds },
{ label: "Other", checked: other, set: setOther },
{ label: "Not running ads yet", checked: notRunningAds, set: setNotRunningAds },
];

return (
<form
onSubmit={handleSubmit}
className={isModal ? "flex min-h-0 flex-col overflow-hidden" : "flex flex-col"}
style={{ background: "white", height: isModal ? "100%" : "auto" }}
>
{/* Accent bar */}
<div
aria-hidden
style={{
height: 4,
background:
"linear-gradient(90deg, #1F5FB8 0%, #2B72D7 50%, #4A8DE0 100%)",
flexShrink: 0,
}}
/>

{/* Header */}
<div
style={{
padding: "24px 28px 20px",
borderBottom: "1px solid var(--sa-ink-100)",
display: "flex",
alignItems: "flex-start",
justifyContent: "space-between",
gap: 16,
flexShrink: 0,
background: "white",
position: "relative",
}}
>
<div style={{ minWidth: 0, flex: 1 }}>
<img src={logo} alt="ScaleAble" style={{ height: 26, marginBottom: 14 }} />
<h2
className="sa-display"
style={{
fontSize: 22,
lineHeight: 1.2,
fontWeight: 600,
letterSpacing: "-0.02em",
margin: 0,
color: "var(--sa-ink-900)",
}}
>
Request access to ScaleAble
</h2>
<p
style={{
margin: "6px 0 0",
fontSize: 13.5,
color: "var(--sa-ink-600, #6B7785)",
lineHeight: 1.5,
}}
>
See true profit, not just ROAS — powered by your real Shopify data.
</p>
</div>

{onCancel && isModal && (
<button
type="button"
onClick={onCancel}
aria-label="Close"
style={{
flexShrink: 0,
width: 32,
height: 32,
display: "inline-flex",
alignItems: "center",
justifyContent: "center",
borderRadius: 999,
background: "var(--sa-ink-50, #F4F6FA)",
border: "1px solid var(--sa-ink-100)",
color: "var(--sa-ink-700)",
cursor: "pointer",
transition: "all 0.15s",
}}
onMouseEnter={(e) => {
(e.currentTarget as HTMLButtonElement).style.background = "var(--sa-ink-100)";
}}
onMouseLeave={(e) => {
(e.currentTarget as HTMLButtonElement).style.background = "var(--sa-ink-50, #F4F6FA)";
}}
>
<X className="h-4 w-4" />
</button>
)}
</div>

{/* Body */}
<div
ref={bodyScrollRef}
className={isModal ? "flex-1 min-h-0 overflow-y-auto" : ""}
style={{
padding: "24px 28px",
background: "white",
WebkitOverflowScrolling: "touch",
}}
>
{/* Store info */}
<div style={{ marginBottom: 24 }}>
<div className="sa-eyebrow" style={{ marginBottom: 12, fontSize: 11 }}>
<span className="sa-eyebrow-dot" />
Store Info
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ marginBottom: 12 }}>
<div>
<label className="sa-label" htmlFor="request-access-email">
Email address <span style={{ color: "#E04A5F" }}>*</span>
</label>
<input
id="request-access-email"
type="email"
required
value={email}
onChange={(e) => setEmail(e.target.value)}
className="sa-input"
placeholder="you@company.com"
/>
</div>

<div>
<label className="sa-label" htmlFor="request-access-store">
Shopify store URL <span style={{ color: "#E04A5F" }}>*</span>
</label>
<input
id="request-access-store"
type="text"
required
value={storeUrl}
onChange={(e) => setStoreUrl(e.target.value)}
className="sa-input"
placeholder="yourstore.myshopify.com"
/>
</div>
</div>

<div>
<label className="sa-label" htmlFor="request-access-revenue">
Average monthly revenue
</label>
<select
id="request-access-revenue"
value={averageRevenue}
onChange={(e) => setAverageRevenue(e.target.value)}
className="sa-select"
>
{revenueOptions.map((option) => (
<option key={option} value={option}>
{option}
</option>
))}
</select>
</div>
</div>

{/* Channels */}
<div>
<div className="sa-eyebrow" style={{ marginBottom: 12, fontSize: 11 }}>
<span className="sa-eyebrow-dot" />
Advertising Channels
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
{channels.map((c) => (
<label
key={c.label}
className={`sa-channel-chip ${c.checked ? "is-checked" : ""}`}
>
<input
type="checkbox"
checked={c.checked}
onChange={(e) => c.set(e.target.checked)}
style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
/>
<span className="sa-channel-check">
{c.checked && <Check className="h-3 w-3" strokeWidth={3} />}
</span>
<span>{c.label}</span>
</label>
))}
</div>

{other && (
<div style={{ marginTop: 12 }}>
<label className="sa-label" htmlFor="request-access-other">
Other platform
</label>
<input
id="request-access-other"
type="text"
value={otherText}
onChange={(e) => setOtherText(e.target.value)}
className="sa-input"
placeholder="Tell us more"
/>
</div>
)}
</div>

{/* Trust strip */}
<div
style={{
marginTop: 20,
padding: "12px 14px",
borderRadius: 10,
background: "linear-gradient(180deg, #F4F8FE 0%, #FAFBFD 100%)",
border: "1px solid #E4ECF7",
display: "flex",
alignItems: "center",
gap: 10,
fontSize: 12.5,
color: "var(--sa-ink-700)",
}}
>
<ShieldCheck
className="h-4 w-4"
style={{ color: "var(--sa-blue-500, #2B72D7)", flexShrink: 0 }}
/>
<span>
No credit card required. We’ll only use your info to review your store.
</span>
</div>

{/* Status messages */}
<div aria-live="polite" style={{ marginTop: 14 }}>
{submitSuccess && (
<div
role="status"
style={{
borderRadius: 12,
padding: "14px 16px",
background: "linear-gradient(180deg, #ECFDF5 0%, #F0FDF7 100%)",
border: "1px solid #A7F3D0",
}}
>
<p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#065F46" }}>
Request received ✓
</p>
<p style={{ margin: "4px 0 0", fontSize: 13, color: "#047857" }}>
{submitSuccess}
</p>
</div>
)}
{submitError && !submitSuccess && (
<div
style={{
borderRadius: 12,
padding: "12px 14px",
background: "#FEF2F2",
border: "1px solid #FECACA",
fontSize: 13,
color: "#B91C1C",
}}
>
{submitError}
</div>
)}
</div>
</div>

{/* Footer */}
<div
style={{
padding: "14px 28px 18px",
background: "var(--sa-ink-50, #F8FAFD)",
borderTop: "1px solid var(--sa-ink-100)",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
gap: 12,
flexWrap: "wrap",
flexShrink: 0,
}}
>
<a
href="mailto:support@scaleableapp.com"
style={{
fontSize: 12.5,
color: "var(--sa-ink-600, #6B7785)",
textDecoration: "none",
display: "inline-flex",
alignItems: "center",
gap: 6,
}}
>
<Mail className="h-3.5 w-3.5" />
support@scaleableapp.com
</a>

<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
{onCancel && (
<button
type="button"
onClick={onCancel}
className="sa-btn sa-btn-ghost sa-btn-sm"
>
Cancel
</button>
)}
<button
type="submit"
disabled={isSubmitDisabled || isSubmitting || Boolean(submitSuccess)}
className="sa-btn sa-btn-primary sa-btn-sm"
style={
isSubmitDisabled || isSubmitting || Boolean(submitSuccess)
? { opacity: 0.55, cursor: "not-allowed" }
: undefined
}
>
{isSubmitting ? "Sending…" : submitSuccess ? "Sent ✓" : "Request Access"}
</button>
</div>
</div>
</form>
);
}

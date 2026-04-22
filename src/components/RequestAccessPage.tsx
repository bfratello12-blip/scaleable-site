import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { RequestAccessForm } from "./RequestAccessForm";

export function RequestAccessPage() {
const navigate = useNavigate();
const [submitted, setSubmitted] = useState(false);

useEffect(() => {
window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}, []);

return (
<div
style={{
minHeight: "100vh",
background:
"radial-gradient(60% 50% at 50% 0%, rgba(43,114,215,0.10) 0%, transparent 70%), #F7FAFD",
paddingTop: "calc(7.5rem + env(safe-area-inset-top))",
paddingBottom: 48,
}}
>
<div
style={{
maxWidth: 640,
width: "100%",
margin: "0 auto",
padding: "0 16px",
}}
>
<div
style={{
marginBottom: 16,
display: "flex",
alignItems: "center",
justifyContent: "space-between",
}}
>
<button
type="button"
onClick={() => navigate(-1)}
className="sa-btn sa-btn-ghost sa-btn-sm"
style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
>
<ArrowLeft className="h-4 w-4" />
Back
</button>
<button
type="button"
onClick={() => navigate("/")}
className="sa-nav-link"
style={{ fontSize: 13.5 }}
>
Home
</button>
</div>

<div
style={{
background: "white",
borderRadius: 18,
overflow: "hidden",
border: "1px solid var(--sa-ink-100)",
boxShadow:
"0 30px 80px -30px rgba(10,22,40,0.18), 0 4px 14px -8px rgba(10,22,40,0.06)",
}}
>
<RequestAccessForm
variant="page"
onSuccess={() => setSubmitted(true)}
/>
{submitted && (
<div style={{ padding: "0 28px 24px" }}>
<button
type="button"
onClick={() => navigate("/")}
className="sa-btn sa-btn-secondary sa-btn-sm"
>
Back to home
</button>
</div>
)}
</div>
</div>
</div>
);
}

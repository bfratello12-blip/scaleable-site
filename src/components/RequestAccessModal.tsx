"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { RequestAccessForm } from "./RequestAccessForm";

type RequestAccessModalProps = {
open: boolean;
onOpenChange: (open: boolean) => void;
};

export function RequestAccessModal({
open,
onOpenChange,
}: RequestAccessModalProps) {
const navigate = useNavigate();

useEffect(() => {
if (!open) return;
if (typeof window === "undefined") return;

if (window.matchMedia("(max-width: 639px)").matches) {
onOpenChange(false);
navigate("/request-access");
return;
}

const originalOverflow = document.body.style.overflow;
const handleKeyDown = (event: KeyboardEvent) => {
if (event.key === "Escape") onOpenChange(false);
};
document.body.style.overflow = "hidden";
document.addEventListener("keydown", handleKeyDown);
return () => {
document.body.style.overflow = originalOverflow;
document.removeEventListener("keydown", handleKeyDown);
};
}, [open, onOpenChange, navigate]);

if (!open) return null;
if (
typeof window !== "undefined" &&
window.matchMedia("(max-width: 639px)").matches
) {
return null;
}

const handleClose = () => onOpenChange(false);

return createPortal(
<div className="fixed inset-0 z-50">
<div
onClick={handleClose}
style={{
position: "fixed",
inset: 0,
background: "rgba(10,22,40,0.55)",
backdropFilter: "blur(8px)",
WebkitBackdropFilter: "blur(8px)",
animation: "saFadeIn 0.2s ease",
}}
/>
<div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
<div
className="pointer-events-auto"
style={{
width: "100%",
maxWidth: 640,
maxHeight: "90vh",
background: "white",
borderRadius: 20,
overflow: "hidden",
boxShadow:
"0 30px 80px -20px rgba(10,22,40,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
animation: "saScaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
display: "flex",
flexDirection: "column",
}}
>
<RequestAccessForm variant="modal" onCancel={handleClose} />
</div>
</div>
</div>,
document.body
);
}

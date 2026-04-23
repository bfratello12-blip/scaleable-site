import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import demoVideoSrc from "../assets/0423.mp4";

type DemoVideoModalProps = {
	open: boolean;
	onClose: () => void;
};

export function DemoVideoModal({ open, onClose }: DemoVideoModalProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		if (!open) {
			return;
		}
		const originalOverflow = document.body.style.overflow;
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", handleKeyDown);
		closeButtonRef.current?.focus();
		return () => {
			document.body.style.overflow = originalOverflow;
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [open, onClose]);

	useEffect(() => {
		if (!open && videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
		}
	}, [open]);

	if (!open) {
		return null;
	}

	return createPortal(
		<div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-8">
			<div
				className="fixed inset-0 bg-black/60 backdrop-blur-sm"
				onClick={onClose}
			/>
			<div
				role="dialog"
				aria-modal="true"
				className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
			>
				<button
					ref={closeButtonRef}
					type="button"
					onClick={onClose}
					aria-label="Close demo"
					className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm transition hover:bg-white hover:text-slate-900"
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
				<div className="aspect-video w-full bg-black">
					<video
						ref={videoRef}
						className="h-full w-full"
						src={demoVideoSrc}
						controls
						playsInline
						preload="metadata"
					/>
				</div>
			</div>
		</div>,
		document.body
	);
}

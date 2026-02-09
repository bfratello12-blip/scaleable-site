import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { RequestAccessForm } from "./RequestAccessForm";

type RequestAccessModalProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export function RequestAccessModal({
	open,
	onOpenChange,
}: RequestAccessModalProps) {
	const bodyScrollRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!open) return;

		// Always open at the top so header is visible
		requestAnimationFrame(() => {
			bodyScrollRef.current?.scrollTo({ top: 0 });
		});

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
	}, [open, onOpenChange]);

	if (!open) return null;

	const handleClose = () => {
		onOpenChange(false);
	};

	return createPortal(
		<div className="fixed inset-0 z-50">
			<button
				type="button"
				aria-label="Close modal"
				onClick={handleClose}
				className="fixed inset-0 bg-black/50 backdrop-blur-sm"
			/>

			<div
				className="fixed inset-0 z-10 flex items-start justify-center overflow-y-auto overscroll-contain px-4 py-6 sm:items-center sm:px-8 sm:py-12"
				style={{ WebkitOverflowScrolling: "touch" }}
			>
				<div className="w-full max-w-xl">
					<div className="rounded-2xl bg-gradient-to-br from-[#0b1b3a] via-[#123a7a] to-[#1e57a6] p-[8px] shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)]">
						<div className="max-h-[calc(100dvh-3rem)] overflow-hidden rounded-[calc(1rem-8px)] bg-white sm:max-h-[85vh]">
							<RequestAccessForm
								variant="modal"
								onCancel={handleClose}
								bodyScrollRef={bodyScrollRef}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
}


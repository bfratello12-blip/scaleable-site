import { useEffect } from "react";
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
		onOpenChange(false);
	};

	return createPortal(
		<div className="fixed inset-0 z-50">
			<div
				className="fixed inset-0 bg-black/50 backdrop-blur-sm"
				onClick={handleClose}
			/>
			<div className="fixed inset-0 flex items-start justify-center overflow-hidden px-4 py-3 sm:items-center sm:px-8 sm:py-12">
				<div className="w-[92%] max-w-xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1b3a] via-[#123a7a] to-[#1e57a6] p-[8px] shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)] sm:w-full h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[85vh]">
					<div className="rounded-[calc(1rem-8px)] bg-white h-full">
						<RequestAccessForm variant="modal" onCancel={handleClose} />
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
}

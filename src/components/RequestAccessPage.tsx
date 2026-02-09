import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RequestAccessForm } from "./RequestAccessForm";

export function RequestAccessPage() {
	const navigate = useNavigate();
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
	}, []);

	return (
		<div className="min-h-screen bg-white px-4 pb-6 pt-24 sm:px-8 sm:pb-10 sm:pt-28">
			<div className="mx-auto w-full max-w-2xl">
				<div className="mb-4 flex items-center justify-between">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="text-sm font-medium text-slate-600 hover:text-slate-900"
					>
						← Back
					</button>
					<button
						type="button"
						onClick={() => navigate("/")}
						className="text-sm font-medium text-blue-600 hover:text-blue-700"
					>
						Home
					</button>
				</div>

				<div className="rounded-2xl bg-gradient-to-br from-[#0b1b3a] via-[#123a7a] to-[#1e57a6] p-[8px] shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)]">
					<div className="rounded-[calc(1rem-8px)] bg-white">
						<RequestAccessForm
							variant="page"
							onSuccess={() => setSubmitted(true)}
						/>
						{submitted && (
							<div className="px-6 pb-8 sm:px-8">
								<button
									type="button"
									onClick={() => navigate("/")}
									className="mt-4 inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
								>
									Back to home
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

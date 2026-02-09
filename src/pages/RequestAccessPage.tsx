import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RequestAccessForm } from "../components/RequestAccessForm";

export function RequestAccessPage() {
	const navigate = useNavigate();
	const [didSucceed, setDidSucceed] = useState(false);

	return (
		<main className="w-full bg-white">
			<div className="mx-auto w-full max-w-3xl px-6 py-10 sm:py-14">
				<div className="mb-6 flex items-center justify-between">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
					>
						← Back
					</button>
					<button
						type="button"
						onClick={() => navigate("/")}
						className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
					>
						Home
					</button>
				</div>

				<div className="rounded-2xl bg-gradient-to-br from-[#0b1b3a] via-[#123a7a] to-[#1e57a6] p-[8px] shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)]">
					<div className="rounded-[calc(1rem-8px)] bg-white">
						<RequestAccessForm
							variant="page"
							onSuccess={() => setDidSucceed(true)}
						/>
					</div>
				</div>

				{didSucceed && (
					<div className="mt-6 flex justify-center">
						<button
							type="button"
							onClick={() => navigate("/")}
							className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
						>
							Back to home
						</button>
					</div>
				)}
			</div>
		</main>
	);
}

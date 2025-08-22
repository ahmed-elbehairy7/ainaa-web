import Modal from "../_components/Modal";
import Link from "next/link";

type NextStepsProps = {
	isOpen: boolean;
	close: boolean;
	onClose: () => void;
};

export default function NextSteps({ isOpen, close, onClose }: NextStepsProps) {
	return (
		<article className="px-4 flex flex-col items-center justify-center text-center">
			<Modal isOpen={isOpen} close={close} onClose={onClose}>
				<div className="flex flex-col items-center justify-center gap-8">
					<div>
						<h2 className="text-xl sm:text-xl md:text-2xl font-semibold">
							لا يزال لدينا مفاجئات أخرى..!
						</h2>
						<p className="mt-2 text-sm sm:text-base">ما هي خطوتك القادمة؟</p>
					</div>
					<p className="text-xs sm:text-sm md:text-base text-center px-2 sm:px-4">
						يمكنك تفعيل الحماية على جهاز آخر! و لا تنسى قراءة
						مقالاتنا عن ما وصلت إليه الأجيال الحالية مع الإباحية
						للكبارو عن الخروج من مستنقع الإباحية للشباب المبتلى.
						<br />
						يمكنك أيضا{" "}
						<Link
							href="https://mafazaa.com/support_us"
							target="_blank"
							className="text-red-700"
						>
							دعمنا
						</Link>{" "}
						أو{" "}
						<a
							rel="noopener noreferrer"
							href="https://www.mafazaa.com/join"
							target="_blank"
							className="text-red-700"
						>
							الانضمام إلينا
						</a>
					</p>

					<div className="flex flex-col sm:flex-row justify-around w-full items-center gap-4 sm:gap-6 md:gap-8">
						<Link
							href="/gen1/setupguide"
							className="w-full sm:w-auto px-4 py-3 sm:py-4 text-center text-sm sm:text-base md:text-lg rounded-md text-white bg-red-700"
						>
							فعلها على جهاز آخر
						</Link>

						{/* // Todo: Need to add a link for "مقالات تهمك" */}
						{
							// <Link
							// 	href="/blogs"
							// 	className="w-40 p-4 rounded-lg  border-4 border-black "
							// >
							// 	مقالات تهمك
							// </Link>
						}
					</div>
				</div>
			</Modal>
		</article>
	);
}

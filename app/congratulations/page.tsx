import Image from "next/image";
import Link from "next/link";
import AfterBtn from "./_components/AfterBtn";

export default function CongratulationsPage() {
	return (
		<main className="max-w-screen-lg mx-auto my-10 flex flex-col items-center  gap-8 px-4">
			<div className="flex flex-col items-center gap-4 mt-4">
				<p className="text-3xl font-bold">مبارك تفعيل الحماية!!</p>
				<p>
					إن وجدت الحماية غير مفعلة، يمكنك التواصل مع أحد ممثلي خدمة
					العملاء
				</p>
			</div>

			<div className="flex flex-col  gap-4">
				<p>
					تستطيع التأكد من أن الحماية تم تفعيلها عن طريق البحث الآمن
					الخاس بجوجل، اضغظ الرابط التالي، و يفترض أن تجد شيئا مشابها
					للصورة التالية
				</p>

				<Link
					href="https://google.com/safesearch"
					className="text-red-600"
					target="_blank"
				>
					اضغظ على الرابط
				</Link>

				<Image
					src="/congratulations/safesearch.png"
					alt="google safesearch"
					width={1000}
					height={600}
				/>
				<p className="text-xl font-semibold">
					ماذا أفعل إن فشل تفعيل الحماية؟
				</p>
				<p> 1. أغلق الراوتر و افتحه مرة أخرى</p>
				<p>2. أغلق الهاتف و افتحه مرة أخرى</p>
				<p>
					إن لم تستطع بعد تفعيل الحماية، يمكنك التواصل مع أحد ممثلي
					خدمة العملاء عن طريق الرابط التالي
				</p>
				<Link href="/support" className="text-red-600">
					اضغظ هنا للتواصل مع أحد ممثلي خدمة العملاء{" "}
				</Link>
			</div>

			<div className="w-full flex justify-between items-center gap-4 ">
				<AfterBtn />

				<Link
					href="/gen1/setupguide/router/step3"
					className="w-40 p-4 rounded-lg  border-4 border-black text-center "
				>
					السابق{" "}
				</Link>
			</div>
		</main>
	);
}

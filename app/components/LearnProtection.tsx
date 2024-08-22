import { genName } from "../appTypes";
import Link from "next/link";

const LearnProtection = () => {
	return (
		<Link href={`/setupvalues`}>
			<p>اضغط هنا لمعرفة المزيد عن مستويات الحماية المتاحة</p>
		</Link>
	);
};

export default LearnProtection;

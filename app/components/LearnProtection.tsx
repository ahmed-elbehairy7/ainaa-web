import { genName } from "../appTypes";
import Link from "next/link";

const LearnProtection = ({ gen }: { gen: genName }) => {
	return (
		<Link href={`/${gen}/setupvalues`}>
			<p>اضغط هنا لمعرفة المزيد عن مستويات الحماية المتاحة</p>
		</Link>
	);
};

export default LearnProtection;

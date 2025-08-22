import { cn } from "@/utils";
import Link from "next/link";

const BlogCard = ({
  className,
  title,
  description,
  blogId,
  isMain,
}: {
  className: string;
  title: string;
  description: string;
  blogId: string;
  isMain?: boolean;
}) => {
  return (
    <div
      className={cn(
        `relative bg-cover bg-center bg-no-repeat group`,
        isMain ? "min-h-[491px]" : "min-h-[306px]",
        className
      )}
    >
      <div className="bg-dark-gradient group-hover:bg-red-gradient transition-all duration-300 h-full w-full absolute top-0 left-0 " />
      <div className="max-w-5xl mx-auto group-hover:gap-y-10 transition-all duration-300  px-4 flex flex-col items-center justify-center text-center text-white relative z-10 h-full w-full">
        <h3 className={cn("text-white", isMain ? "text-H3" : "text-H5")}>
          {title}
        </h3>
        <p className="text-very-small mt-4 group-hover:hidden">{description}</p>
        <Link
          href={`/blogs/${blogId}`}
          className="text-very-small mt-4 hidden group-hover:block"
        >
          اضط هنا لتقرأ المقال
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

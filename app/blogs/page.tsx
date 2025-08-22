import { cn } from "@/utils";
import BlogBody from "../_components/BlogBody";
import BlogCard from "../_components/BlogCard";

function BlogsPage() {
  return (
    <div className="bg-white">
      <div className="bg-white   py-24">
        <div className="flex flex-col items-center justify-center gap-y-[30px] max-w-5xl mx-auto px-4">
          <h2 className="text-text font-bold text-5xl text-center">أهلا بك في المدونة!</h2>
          <p className="text-text text-2xl font-bold text-center">
            أهم مقالاتنا، مقال توعوي للأباء و الأمهات عن ما وصلت إليه الإباحية
            في هذا الزمن، و آخر يساعد الشباب على التعافي بإذن الله
          </p>
        </div>
      </div>
      <div className="  grid lg:grid-cols-2 ">
        <BlogCard
          isMain
          blogId="1"
          className="bg-blog-image2 max-lg:bg-right"
          title="أطفالكم في خطر عظيم!"
          description="نداء استغاثة من شاب عن واقع الأجيال الحالية"
        />
        <BlogCard
          isMain
          blogId="2"
          className="bg-blog-image1"
          title="أطفئ حريق الإباحية"
          description="دليل الشباب المبتلى عن كيفية الإقلاع عن الإباحية بإذن الله"
        />
      </div>

      <div className="bg-white   pb-24 pt-36">
        <div className="flex flex-col items-center justify-center gap-y-[30px] max-w-5xl mx-auto px-4">
          <h2 className="text-text font-bold text-5xl">مقالات تهمك</h2>
          <p className="text-text text-2xl font-bold text-center">
            أهلا بك في المدونة، هنا تجد مقالات توعوية للأباء و الأمهات عن خطورة
            الإباحية، و ما يساعد الشباب على التعافي، و غير ذلك من الأمور النافعة
            إن شاء الله
          </p>
        </div>
      </div>
      <BlogBody />
      <div className="flex justify-center mt-[114px] pb-[100px]">
        <button className={cn("btn-outline ", " !text-black !border-black ")}>
          المزيد...
        </button>
      </div>
    </div>
  );
}

export default BlogsPage;

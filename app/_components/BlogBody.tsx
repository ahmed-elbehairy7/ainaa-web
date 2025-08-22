import BlogCard from "./BlogCard";

function BlogBody() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 px-5 ">
      {Array.from({ length: 9 }).map((_, index) => (
        <BlogCard
          blogId={index.toString()}
          key={index}
          className="bg-blog-image3"
          title="عنوان المقال هنا"
          description="وصف المقال هنا"
        />
      ))}
    </div>
  );
}

export default BlogBody;

import LatestCard from "../LatestCard/LatestCard";
import BlogCard from "../BlogCard/BlogCard"
export default function BlogList({ posts , view }) {
  return (
    <section className="py-5 bg-black">
      <div className="container">
        <div className="row g-4">
          {posts.map((post) => (
            <div className={view ==="grid" ? "col-lg-4 col-md-6" : "col-12"} key={post.id}>
              {
                view ==="grid" ? <LatestCard blog={post}/> : <BlogCard blog={post}/>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

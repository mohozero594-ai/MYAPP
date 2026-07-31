import posts from "../../data/blogs.json";
import LatestCard from "../LatestCard/LatestCard";
import { NavLink } from "react-router-dom";

export default function LatestPosts() {
  const latestPosts = posts.slice(3, 6);

  return (
    <section className="latest-posts py-5 ">
      <div className="container">
        <div className="latest-header">
          <div>
            <span className="section-badge">
              <i className="fa-solid fa-circle"></i>
              الأحدث
            </span>

            <h2 className="section-title">أحدث المقالات</h2>

            <p className="section-desc">محتوى جديد طازج من المطبعة</p>
          </div>

          <NavLink to = {"/Blog"} className="all-posts">
            عرض جميع المقالات
            <i className="fa-solid fa-arrow-left"></i>
          </NavLink>
        </div>

        <div className="row g-4">
          {latestPosts.map((post) => (
            <div className="col-lg-4 col-md-6 col-12" key={post.id}>
              <LatestCard blog={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

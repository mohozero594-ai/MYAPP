import React from "react";
import posts from "../../data/blogs.json";
import BlogCard from "../BlogCard/BlogCard";
import { NavLink } from "react-router-dom";

export default function FeaturedSection() {
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);

  return (
    <section className="featured-section py-5">
      <div className="container">
        <div className="featured-header d-flex justify-content-between align-items-center mb-5">
          <div>
            <span className="section-badge">
              <i className="fa-solid fa-star"></i> مميز
            </span>

            <h2 className="section-title mt-3">مقالات مختارة</h2>

            <p className="section-desc">
              اكتشف أفضل المقالات المختارة بعناية لمساعدتك في تطوير مهاراتك في
              التصوير.
            </p>
          </div>

          <NavLink to={"/Blog"}>
            <button className="btn section-btn">
              عرض الكل
              <i className="fa-solid fa-arrow-left ms-2"></i>
            </button>
          </NavLink>
        </div>

        <div className="row g-4">
          {featuredPosts.map((post) => (
            <div className="col-12" key={post.id}>
              <BlogCard blog={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

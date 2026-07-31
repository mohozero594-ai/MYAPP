import { Link } from "react-router-dom";
export default function BlogCard({ blog }) {
  return (
  <Link to={`/Blog/${blog.slug}`} className="text-decoration-none">
    <div className="blog-card">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6">
          <div className="blog-image">
            <img
              src={blog.image}
              alt={blog.title}
              className="img-fluid w-100"
            />

            <span className="blog-badge">{blog.category}</span>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="blog-content">
            <div className="blog-info">
              <span>
                <i className="fa-regular fa-calendar"></i>
                {blog.date}
              </span>

              <span>
                <i className="fa-regular fa-clock"></i>
                {blog.readTime}
              </span>
            </div>

            <h3>{blog.title}</h3>

            <p>{blog.excerpt}</p>

            <div className="blog-footer">
              <div className="author">
                <img src={blog.author.avatar} alt={blog.author.name} />

                <div>
                  <h6>{blog.author.name}</h6>
                  <small>{blog.author.role}</small>
                </div>
              </div>

              <button className="read-btn fw-bold">
                اقرأ المقال
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
  );
}

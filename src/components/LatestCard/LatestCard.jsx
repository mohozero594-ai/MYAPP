import { Link } from "react-router-dom";
export default function LatestCard({ blog }) {
  return (
     <Link to={`/Blog/${blog.slug}`} className="text-decoration-none">
    <div className="latest-card">
      <div className="latest-image">
        <img src={blog.image} alt={blog.title} className="img-fluid w-100" />

        <span className="latest-badge">{blog.category}</span>
      </div>

      <div className="latest-content">
        <div className="latest-info">
          <span>
            <i className="fa-regular fa-clock"></i>
            {blog.readTime}
          </span>

          <span>
            <i className="fa-regular fa-calendar"></i>
            {blog.date}
          </span>
        </div>

        <h4>{blog.title}</h4>

        <p>{blog.excerpt}</p>
      </div>

      <div className="latest-footer">
        <div className="author">
          <div>
            <h6>{blog.author.name}</h6>

            <small>{blog.author.role}</small>
          </div>

          <img src={blog.author.avatar} alt={blog.author.name} />
        </div>

        <button className="circle-btn">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </div>
    </Link>
  );
}

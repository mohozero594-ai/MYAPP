import { Link } from "react-router-dom";

export default function RelatedCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="related-card">
      <div className="related-image">
        <img src={post.image} alt={post.title} />

        <span className="related-category">{post.category}</span>
      </div>

      <div className="related-body">
        <h3>{post.title}</h3>

        <div className="related-info">
          <span>
            <i className="fa-regular fa-clock"></i>
            {post.readTime} دقائق
          </span>

          <div className="related-author">
            <span>{post.author.name}</span>

            <img src={post.author.avatar} alt={post.author.name} />
          </div>
        </div>
      </div>
    </Link>
  );
}

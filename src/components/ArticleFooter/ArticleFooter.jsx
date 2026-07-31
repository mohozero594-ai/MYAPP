
export default function ArticleFooter({ post }) {
  return (
    <section className="article-footer">
      <div className="footer-box">
        <div className="footer-title">
          <h4>الوسوم</h4>
          <i className="fa-solid fa-tags"></i>
        </div>

        <div className="footer-tags">
          {post.tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
      </div>

      <div className="footer-box">
        <div className="footer-title">
          <h4>شارك المقال</h4>
          <i className="fa-solid fa-share-nodes"></i>
        </div>

        <div className="share-icons">
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <a href="#">
            <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </div>

      <div className="footer-box author-box">
        <img src={post.author.avatar} alt="" />

        <div>
          <span className="author-label">كاتب المقال</span>

          <h3>{post.author.name}</h3>

          <h6>{post.author.role}</h6>

          <p>{post.title}</p>
        </div>
      </div>
    </section>
  );
}

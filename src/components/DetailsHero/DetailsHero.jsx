
export default function DetailsHero({ post }) {
  return (
    <section
      className="details-hero"
      style={{
        backgroundImage: `url(${post.image})`,
      }}
    >
      <div className="overlay"></div>

      <div className="container hero-content">
        <span className="hero-category">{post.category}</span>

        <div className="hero-info">
          <span>
            <i className="fa-regular fa-calendar"></i>
            {post.date}
          </span>

          <span>
            <i className="fa-regular fa-clock"></i>
            {post.readTime}
          </span>
        </div>

        <h1>{post.title}</h1>

        <p>{post.excerpt}</p>

        <div className="author">
          <img src={post.author.avatar} alt={post.author.name} />

          <div>
            <h6>{post.author.name}</h6>

            <span>{post.author.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

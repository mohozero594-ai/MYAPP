import RelatedCard from "../RelatedCard/RelatedCard";

export default function RelatedPosts({ posts, currentPost }) {
  const relatedPosts = posts
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        post.category === currentPost.category,
    )
    .slice(0, 3);

  return (
    <section className="related-posts">
      <div className="related-header">
        <div>
          <h2>مقالات قد تعجبك</h2>
          <p>استكشف المزيد من المحتوى المميز</p>
        </div>

        <div className="related-icon">
          <i className="fa-regular fa-newspaper"></i>
        </div>
      </div>

      <div className="row g-4">
        {relatedPosts.map((post) => (
          <div className="col-lg-4 col-md-6" key={post.id}>
            <RelatedCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}

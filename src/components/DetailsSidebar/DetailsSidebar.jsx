
export default function DetailsSidebar({ post }) {
  const headings = post.content
    .split("##")
    .slice(1)
    .map((item) => item.split("\n\n")[0]);

  return (
    <aside className="details-sidebar">
      <div className="sidebar-card">
        <h4 className="sidebar-title">
          <i className="fa-solid fa-list"></i>
          محتويات المقال
        </h4>

        <ul className="toc-list">
          {headings.map((title, index) => (
            <li key={index}>
              <span>{index + 1}</span>
              {title}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-card info-card">
        <div className="info-box">
          <i className="fa-regular fa-calendar"></i>

          <div>
            <h6>تاريخ النشر</h6>

            <p>{post.date}</p>
          </div>
        </div>

        <div className="info-box">
          <i className="fa-regular fa-clock"></i>

          <div>
            <h6>وقت القراءة</h6>

            <p>{post.readTime}</p>
          </div>
        </div>
      </div>

    
    </aside>
  );
}

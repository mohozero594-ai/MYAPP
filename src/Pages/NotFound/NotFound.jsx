import { NavLink } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>

        <div className="error-icon">
          <i className="fa-regular fa-face-frown"></i>
        </div>

        <h2>عفوًا! الصفحة غير موجودة</h2>

        <p>
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها، دعنا نعيدك إلى المكان
          الصحيح.
        </p>

        <div className="not-found-buttons">
          <NavLink to="/" className="home-btn">
            الصفحة الرئيسية
          </NavLink>

          <NavLink to="/blog" className="blog-btn">
            تصفح المقالات
          </NavLink>
        </div>

        <div className="help-links">
          <p>قد تجد هذه مفيدة:</p>

          <NavLink to="/blog">المدونة</NavLink>

          <NavLink to="/about">من نحن</NavLink>

          <NavLink to="/privacy">الخصوصية</NavLink>
        </div>
      </div>
    </div>
  );
}

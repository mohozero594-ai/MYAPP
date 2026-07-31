import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer foot pt-5">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="logo-placeholder d-flex justify-content-center align-items-center fw-bold fs-4">
                ع
              </div>

              <h4 className="text-white fw-bold m-0">عدسة</h4>
            </div>

            <p className="footer-text">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.{" "}
            </p>

            <div className="social d-flex gap-3 mt-4">
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <h5 className="footer-title">استكشف</h5>

            <ul className="footer-links">
              <li>
                <NavLink to={"/"}>الرئيسيه</NavLink>
              </li>
              <li>
                <NavLink to={"/Blog"}>المدونة</NavLink>
              </li>
              <li>
                <NavLink to={"*"}>من نحن</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <h5 className="footer-title">التصنيفات</h5>

            <ul className="footer-links">
              <li>
                <a href="#">إضاءة</a>
              </li>
              <li>
                <a href="#">بورتريه</a>
              </li>
              <li>
                <a href="#">مناظر طبيعية</a>
              </li>
              <li>
                <a href="#">تقنيات</a>
              </li>
            </ul>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <h5 className="footer-title">ابقى على اطلاع</h5>

            <p className="footer-text">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <input
              type="email"
              placeholder="ادخل بريدك الإلكتروني"
              className="form-control mb-3"
            />

            <button className="btn subscribe-btn w-100">اشتراك</button>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex justify-content-between flex-wrap">
          <div className="copyright gray">
            © 2026 عدسة. صنع بكل<i className="fa-solid fa-heart"></i> جميع
            الحقوق محفوظة.
          </div>

          <div className="d-flex gap-4">
            <a href="#" className="a gray">
              سياسة الخصوصية
            </a>

            <a href="#" className="a gray">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

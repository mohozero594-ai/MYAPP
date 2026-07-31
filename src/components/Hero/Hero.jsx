import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <span className="hero-badge">
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
              مرحباً بك في عدسة
            </span>

            <h1 className="hero-title">
              <span className="text-warning">اكتشف</span> فن
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className="hero-desc">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير
            </p>

            <div className="hero-btns d-flex justify-content-center flex-wrap gap-3">
              <NavLink to={"/Blog"} className="text-white">
                <button className="btn hero-btn">
                  استكشف المقالات
                  <i className="fa-solid fa-arrow-left ms-2"></i>
                </button>
              </NavLink>
              <button className="btn hero-btn-outline">
                <i className="fa-regular fa-circle-question ms-2"></i>
                اعرف المزيد
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5 justify-content-center">
          <div className="col-xl-2 col-lg-3 col-md-6 col-6">
            <div className="state-card">
              <i className="fa-regular fa-newspaper"></i>

              <h3>50+</h3>

              <p>مقالة</p>
            </div>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-6 col-6">
            <div className="state-card">
              <i className="fa-solid fa-users"></i>

              <h3>10+ ألف</h3>

              <p>قارئ</p>
            </div>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-6 col-6">
            <div className="state-card">
              <i className="fa-solid fa-folder"></i>

              <h3>4</h3>

              <p>تصنيفات</p>
            </div>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-6 col-6">
            <div className="state-card">
              <i className="fa-solid fa-pen"></i>

              <h3>6</h3>

              <p>كاتب</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

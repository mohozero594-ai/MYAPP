import React from 'react'
import posts from "../../data/blogs.json"

export default function Subscribe() {

    const users = posts.slice(6,9);
  return (
    <section className="newsletter py-5">

      <div className="container">

        <div className="newsletter-box">

          <div className="newsletter-icon">
            <i className="fa-regular fa-envelope"></i>
          </div>

          <h2>
            اشترك في <span>نشرتنا الإخبارية</span>
          </h2>

          <p>
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
            />

            <button>
              اشترك الآن
            </button>

          </form>

          <div className="newsletter-footer">

            <div className="users">

              <img src={users[0].author.avatar} alt="" />
              <img src={users[1].author.avatar} alt="" />
              <img src={users[2].author.avatar} alt="" />

              <span>انضم لـ 10,000+ مصور</span>

            </div>

            <span>بدون إزعاج</span>

            <span>إلغاء الاشتراك في أي وقت</span>

          </div>

        </div>

      </div>

    </section>
  )
}

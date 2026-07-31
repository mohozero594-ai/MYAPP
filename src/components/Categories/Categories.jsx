import posts from "../..//data/blogs.json";

export default function Categories() {

    const categories = [...new Set(posts.map(post => post.category))]
        .map(category => ({
            name: category,
            count: posts.filter(post => post.category === category).length
        }));

    const icons = {
        "إضاءة": "fa-solid fa-sun",
        "بورتريه": "fa-solid fa-user",
        "مناظر طبيعية": "fa-solid fa-image",
        "تقنيات": "fa-solid fa-sliders",
        "معدات": "fa-solid fa-camera"
    };

    return (
        <section className="categories py-5">

            <div className="container">

                <div className="text-center mb-5">

                    <span className="section-badge">
                        <i className="fa-solid fa-circle"></i>
                        التصنيفات
                    </span>

                    <h2 className="section-title mt-4 fs-1">
                        استكشف حسب الموضوع
                    </h2>

                    <p className="section-desc mx-auto">
                        اعثر على محتوى مصمم حسب اهتماماتك
                    </p>

                </div>

                <div className="row g-4">

                    {categories.map((category, index) => (

                        <div
                            key={index}
                            className="col-lg-3 col-md-6 col-sm-6"
                        >

                            <div className="category-card">

                                <div className="category-icon">

                                    <i className={icons[category.name]}></i>

                                </div>

                                <h4>{category.name}</h4>

                                <span>{category.count} مقالة</span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
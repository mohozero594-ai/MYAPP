import BlogHero from "../../components/BlogHero/BlogHero";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import BlogList from "../../components/BlogList/BlogList";
import ViewToggle from "../../components/ViewToggle/ViewToggle";
import { useState } from "react";
import postsData from "../../data/blogs.json";

export default function Blog() {
  const posts = postsData;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");
  const [view, setView] = useState("grid");

  const categories = [
    "الكل",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const filteredPosts = posts.filter((post) => {
    const matchCategory = category === "الكل" || post.category === category;

    const matchSearch =
      post.title.includes(search) || post.excerpt.includes(search);

    return matchCategory && matchSearch;
  });

  return (
    <>
      <BlogHero />

      <section className="blog-controls">
        <div className="container">
          <div className="row align-items-center gy-4 border-bottom pb-4 border-1">
            <div className="col-lg-5">
              <Search search={search} setSearch={setSearch} />
            </div>

            <div className="col-lg-7">
              <Filter
                categories={categories}
                category={category}
                setCategory={setCategory}
              />
            </div>
          </div>

          

          <div className="blog-header">
             <div className="posts-count">
              عرض <span className="text-white">{filteredPosts.length}</span>{" "}
              مقالة
            </div>
            <ViewToggle view={view} setView={setView} />
          </div>
        </div>
      </section>

      <BlogList posts={filteredPosts} view={view} />
    </>
  );
}

import { useParams } from "react-router-dom";
import postsData from "../../data/blogs.json";
import DetailsHero from "../../components/DetailsHero/DetailsHero";
import DetailsContent from "../../components/DetailsContent/DetailsContent";
import DetailsSidebar from "../../components/DetailsSidebar/DetailsSidebar";
import ArticleFooter from "../../components/ArticleFooter/ArticleFooter";
import RelatedPosts from "../../components/RelatedPosts/RelatedPosts";

export default function BlogDetails() {
  const { slug } = useParams();

  const post = postsData.find((item) => item.slug === slug);

  if (!post) {
    return <h2>المقال غير موجود</h2>;
  }

  return (
    <div className="bg-black">
        <DetailsHero post={post} />
       <div className="container pb-3">
         <div className="row mt-3">
          <div className="col-lg-8 order-2 order-lg-1">
            <DetailsContent post={post} />
            <ArticleFooter post={post}/>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <DetailsSidebar post={post} />
          </div>
        </div>
        <RelatedPosts posts={postsData} currentPost = {post}/>
       </div>
      
    </div>
  );
}

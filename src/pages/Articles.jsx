import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { Articles } from "../dummyData/Articles";
import Content from "../components/Content";

const ArticlePage = () => {
  const { slug, articleSlug } = useParams();

  const decodedSlug = decodeURIComponent(slug);
const decodedArticleSlug = decodeURIComponent(articleSlug);

  // Convert slug back to readable text
const formatSlug = (text) =>
  text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

 const categoryTitle = formatSlug(decodedSlug);
const articleTitle = formatSlug(decodedArticleSlug);

  // Find the article
const article = Articles.find(
  (a) =>
    encodeURIComponent(a.title.toLowerCase().replace(/\s+/g, "-")) ===
    decodedArticleSlug
);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#1A2C40] text-white pt-20 pb-8 px-6 flex flex-col items-start">
        <h1 className="text-xl md:text-4xl font-bold mb-2">
          {article?.title || articleTitle}
        </h1>
        <p className="text-md mt-2 text-[#879ED0]">
          Category: {categoryTitle} • Modified on {article?.date}
        </p>
      </section>

      {/* Content Area */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">

        {/* Main Article (70%) */}
        <section className="md:col-span-2 bg-white shadow-md rounded-xl p-8">
       <Content />
        </section>

        {/* Sidebar (30%) */}
        <aside className="bg-white shadow-md rounded-xl p-6 h-max">
          <h2 className="text-lg font-semibold mb-4">
            Articles in {categoryTitle}
          </h2>
          <div className="space-y-3">
            {Articles.map((a, idx) => (
              <Link
                key={idx}
                to={`/category/${slug}/${a.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex items-start space-x-2 text-blue-600 hover:underline"
              >
                <FaRegFileAlt className="mt-1 flex-shrink-0" />
                <span>{a.title}</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticlePage;

import { Articles } from "../dummyData/Articles";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

const ArticlesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Most popular articles</h2>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          View all articles
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
        {Articles.map((article, idx) => (
          <a
            key={idx}
            href={article.link}
            className="flex items-start space-x-3 group"
          >
            {/* Icon */}
            <FaRegFileAlt className="text-blue-600 mt-1 flex-shrink-0" />

            {/* Texts */}
            <div>
              <p className="text-blue-600 font-medium group-hover:underline">
                {article.title}
              </p>
              <p className="text-sm text-gray-500">
                Modified on {article.date}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;

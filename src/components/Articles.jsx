import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticlesSection = ({ posts = [], searchTerm, loading }) => {
  const latestPosts = posts.slice(0, 9);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          {searchTerm ? `Search Results for "${searchTerm}"` : "Latest Articles"}
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <p>Searching...</p>
        ) : latestPosts.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          latestPosts.map((article, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {article.featured_image && (
                <img src={article.featured_image} alt={article.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <FaRegFileAlt className="text-blue-600 text-2xl mr-2" />
                  <h3 className="font-medium text-gray-800 text-lg">{article.title}</h3>
                </div>

                {article.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {article.categories.map((cat) => (
                      <span key={cat.id} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {cat.name}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-gray-500 mb-3">
                  Modified on {article.updated_at || "N/A"}
                </p>

                <Link   to={`/category/${article?.categories[0]?.id}/${article?.categories[0]?.name}/${article.id}/${article.title.replace(/\s+/g, '-').toLowerCase(
                                )}`} className="text-blue-600 text-sm font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ArticlesSection;

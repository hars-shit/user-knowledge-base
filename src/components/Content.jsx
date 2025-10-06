import React from "react";

const Content = ({ post }) => {
  if (!post) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12 space-y-12">
      {/* Render HTML content dynamically */}
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </div>
  );
};

export default Content;

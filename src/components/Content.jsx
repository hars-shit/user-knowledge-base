import React from "react";
import parse, { domToReact } from "html-react-parser";

const Content = ({ post }) => {
  if (!post || !post.body) return <p>Loading...</p>;

  const safeBody = typeof post.body === "string" ? post.body : "";

  const options = {
    replace: (domNode) => {
      if (domNode.type === "tag") {
        const children = domToReact(domNode.children || [], options);

        switch (domNode.name) {
          case "h1":
            return <h1 className="text-4xl font-bold mb-4">{children}</h1>;
          case "h2":
            return <h2 className="text-3xl font-semibold mb-3">{children}</h2>;
          case "h3":
            return <h3 className="text-2xl font-semibold mb-2">{children}</h3>;
          case "h4":
            return <h4 className="text-xl font-semibold mb-2">{children}</h4>;
          case "h5":
            return <h5 className="text-lg font-medium mb-1">{children}</h5>;
          case "h6":
            return <h6 className="text-base font-medium mb-1">{children}</h6>;
          case "p":
            return <p className="mb-2">{children}</p>;
          case "ul":
            return <ul className="list-disc ml-6 mb-2">{children}</ul>;
          case "ol":
            return <ol className="list-decimal ml-6 mb-2">{children}</ol>;
          case "li":
            return <li className="mb-1">{children}</li>;
          case "strong":
            return <strong className="font-bold">{children}</strong>;
          case "em":
            return <em className="italic">{children}</em>;
          case "a":
            return <a className="text-blue-600 underline" href={domNode.attribs?.href}>{children}</a>;
          case "img":
            return <img className="rounded-md my-2" src={domNode.attribs?.src} alt={domNode.attribs?.alt || ""} />;
          case "blockquote":
            return <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-2">{children}</blockquote>;
          case "br":
            return <br />;
          default:
            return; // leave other tags as is
        }
      }
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12 space-y-12">
      <div className="prose max-w-full">
        {parse(safeBody, options)}
      </div>
    </div>
  );
};

export default Content;

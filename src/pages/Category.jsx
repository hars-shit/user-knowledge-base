import React from 'react'
import { Articles } from "../dummyData/Articles";
import { Link, useParams } from 'react-router-dom';
import { FaRegFileAlt } from 'react-icons/fa';

const Category = () => {
    const { slug } = useParams();

    function slugToTitle(slug) {
        return slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());
    }

    const title = slugToTitle(slug)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* hero section */}
            <section className="bg-[#1A2C40] text-white pt-10 pb-10 px-6 flex flex-col items-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-6 text-center">
                    Knowledge Base
                </h1>
                <p className="text-xl">{title}</p>
            </section>

            {/* articles section */}
            <section className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white shadow-lg rounded-xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
                        Articles in {title}
                    </h2>

                    <div className="space-y-6">
                        {Articles.map((article, idx) => (
                            <Link
                                to={`/category/${encodeURIComponent(slug)}/${encodeURIComponent(
                                    article.title.toLowerCase().replace(/\s+/g, "-")
                                )}`}
                            >
                                {/* Icon */}
                                <FaRegFileAlt className="text-[#1A2C40] mt-1 text-xl flex-shrink-0" />

                                {/* Texts */}
                                <div>
                                    <p className="text-lg font-medium text-[#1A2C40] group-hover:underline">
                                        {article.title}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Modified on {article.date}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Category

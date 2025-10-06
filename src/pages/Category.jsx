import React, { useEffect, useState } from 'react'
import { Articles } from "../dummyData/Articles";
import { Link, useParams } from 'react-router-dom';
import { FaRegFileAlt } from 'react-icons/fa';
import { fetchPostsByCategory } from '../services/api';

const Category = () => {
    const { id ,name} = useParams();
console.log("ds",id,name)
     const [posts, setPosts] = useState([]);
console.log("post",posts)
  useEffect(() => {
    if (id) {
      fetchPostsByCategory(id)
        .then((data) => setPosts(data))
        .catch((err) => console.error(err));
    }
  }, [id]);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* hero section */}
            <section className="bg-[#1A2C40] text-white pt-10 pb-10 px-6 flex flex-col items-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-6 text-center">
                    Knowledge Base
                </h1>
                <p className="text-xl">{name || ""}</p>
            </section>

            {/* articles section */}
            <section className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white shadow-lg rounded-xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
                        Articles in {name}
                    </h2>

                    <div className="space-y-6">
                        {posts.map((article, idx) => (
                            <Link
                                to={`/category/${id}/${name}/${article.id}/${article.title.replace(/\s+/g, '-').toLowerCase(
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
                                        Modified on {article.updated_at}
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

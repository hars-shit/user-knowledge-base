import { Link } from 'react-router-dom';
import ArticlesSection from '../components/Articles';
import { Category } from '../dummyData/Category';
import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const Home = () => {

    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section className="bg-[#1A2C40] text-white pt-24 pb-24 md:pb-36 px-6 flex flex-col items-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-6 text-center">
                    Hi, how can we help you?
                </h1>

                {/* Search Bar */}
                <div className="w-full max-w-sm sm:max-w-xl">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base bg-white rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-[#1A2C40] text-black"
                        />
                        <button className="bg-white text-[#1A2C40] px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center">
                            <IoSearchSharp className="text-lg sm:text-2xl" />
                        </button>
                    </div>
                </div>

            </section>

            {/* Category Cards Section */}
            <section className="relative -mt-[6%] md:-mt-[3%] px-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    {/* Example Card */}
                    {Category.map((e, index) => {
                         const slug = e?.title?.toLowerCase().replace(/\s+/g, "-");
                        return (
                        <Link
                         to={`/category/${slug}`}
                            key={index}
                            className="bg-white cursor-pointer shadow-md rounded-xl p-6 flex flex-col items-center text-center h-52" // h-64 makes it taller
                        >
                            <img
                                src={e.img}
                                alt="Card Logo"
                                className="w-16 h-16 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold">{e?.title}</h3>
                        </Link>
                    )})}
                </div>
            </section>

            {/* Article section  */}

            <ArticlesSection />
        </div>
    );
};

export default Home;

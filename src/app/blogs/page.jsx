import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      image: "/images/Renault-Duster.avif",
      small_desc: "This is a detailed review of the Renault Duster 2026 model.",
      title: "Renault Duster 2026: Launch Date, Expected Price & Features",
      link: "/blogs/renault-duster-2026-teaser",
      date: "2024-06-01",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.link}
            className="border border-gray-200 rounded-md overflow-hidden shadow-lg cursor-pointer"
          >
            <div className="relative w-full h-48 ">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
              />
            </div>

            <div className="p-2">
              <h3 className="text-lg font-medium text-gray-900 ">
                {blog.title}
              </h3>
            </div>

            <div className="p-2 ">
              <p className="text-sm text-gray-500">{blog?.small_desc}</p>
            </div>

            <div className="p-2">
              <p className="text-sm text-gray-500">{blog?.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;

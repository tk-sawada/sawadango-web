// works/page.tsx

"use client"; // This is a client-side component

import { useEffect, useState } from "react";
import Image from "next/image";

// import { formatDate } from "@/utils/format";
import { fetchWorks } from "@/utils/fetchWorks"
import { StrapiResponseWork } from "@/types/StrapiResponse";

export default function workPage() {
  const [StrapiResponses, setStrapiResponse] = useState<StrapiResponseWork>()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchWorks();
        setStrapiResponse(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

    if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Loading photos…</p>
      </div>
    );
  }
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {StrapiResponses?.data.map((ent) => (
          <article
            key={ent.id.toString()}
            className="group bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition"
          >
            <div className="w-full aspect-square relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${ent.Work.url}`}
                alt={ent.Work.name.toString()}
                fill
                className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  /*
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {StrapiResponses?.data.map((ent) => (
          <article
            key={ent.id.toString()}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition  grayscale group-hover:grayscale-0"
          >
            <div className="relative w-full h-64">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}`+ent.Work.url}
                alt={ent.Work.name.toString()}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 640px) 50vw, 33vw"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
  */
}
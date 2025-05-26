// contact/page.tsx

import Image from "next/image";
import { formatDate } from "@/utils/format";
import { getContact } from "@/utils/getContact"
import { StrapiResponseContact } from "@/types/StrapiResponse";

// 完全静的生成にする
export const revalidate = false;

export default async function contactPage() {
  const StrapiResponses: StrapiResponseContact = await getContact();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white shadow-md rounded-lg p-4">
            <div className="relative w-full h-64">
            <a
              className="block dark:hidden object-cover rounded-full rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href={StrapiResponses.data.Instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Instagram_Glyph_Black.svg"
                alt="Instagram"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              @tkyswd
            </a>
            </div>
            <p className="text-sm text-gray-500">
              renewed on {formatDate(StrapiResponses.data.publishedAt)}
            </p>
          </article>
          <article className="bg-white shadow-md rounded-lg p-4">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href={StrapiResponses.data.Github}
              target="_blank"
              rel="noopener noreferrer"
            >
              @tk-sawada
            </a>
            <div className="relative w-full h-64">
              <Image
                src="/github-mark.svg"
                alt="GitHub"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
            <p className="text-sm text-gray-500">
              renewed on {formatDate(StrapiResponses.data.publishedAt)}
            </p>
          </article>
          <article className="bg-white shadow-md rounded-lg p-4">
            <p className="text-gray-600 mb-4">
              {StrapiResponses.data.Github}</p>
            <p className="text-sm text-gray-500">
              renewed on {formatDate(StrapiResponses.data.publishedAt)}
            </p>
            <div className="relative w-full h-64">
              <Image
                src="/github-mark.svg"
                alt="GitHub"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </article>
          {/*
          <article className="bg-white shadow-md rounded-lg p-4">
            <p className="text-gray-600 mb-4">{StrapiResponses.data.Email}</p>
            <p className="text-sm text-gray-500">
              renewed on {formatDate(StrapiResponses.data.publishedAt)}
            </p>
          </article>
          */}
      </div>
    </div>
  );
}

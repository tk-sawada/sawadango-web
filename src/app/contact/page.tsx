// contact/page.tsx

import Image from "next/image";
import { getID } from "@/utils/getID2";
import { getContact } from "@/utils/getContact"
import { StrapiResponseContact } from "@/types/StrapiResponse";

// 完全静的生成にする
export const revalidate = false;

export default async function ContactPage() {
  const StrapiResponses: StrapiResponseContact = await getContact();

  return (
<div className="p-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg">

    {/* Instagram */}
    <article className="bg-white shadow-md rounded-lg p-4 w-full transform hover:scale-105 transition cursor-pointer">
      <a
        href={StrapiResponses.data.Instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group"
      >
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src="/Instagram_Glyph_Black.svg"
            alt="Instagram"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-lg text-gray-800">{getID(StrapiResponses.data.Instagram)}</p>
      </a>
    </article>

    {/* GitHub */}
    <article className="bg-white shadow-md rounded-lg p-4 w-full transform hover:scale-105 transition cursor-pointer">
      <a
        href={StrapiResponses.data.Github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group"
      >
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src="/github-mark.svg"
            alt="GitHub"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-lg text-gray-800">{getID(StrapiResponses.data.Github)}</p>
      </a>
    </article>

  </div>
</div>
  );
}


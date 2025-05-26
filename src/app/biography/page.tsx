// biography/page.tsx

import { formatDate } from "@/utils/format";
import { getBiographies } from "@/utils/getBiographies";
import { StrapiResponseBiography } from "@/types/StrapiResponse";

// 完全静的生成にする
export const revalidate = false;

export default async function BiographyPage() {
  const StrapiResponses: StrapiResponseBiography = await getBiographies();

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {StrapiResponses.data.map((bio) => (
          <article key={bio.id} className="bg-white shadow-md rounded-lg p-4">
            <p className="text-gray-600 mb-4">{bio.event}</p>
            <p className="text-sm text-gray-500">
              {/*{new Date(bio.date).toLocaleDateString()}*/}
              {formatDate(bio.date)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchWorks } from "@/utils/fetchWorks";
import { StrapiResponseWork } from "@/types/StrapiResponse";

// モーダルで使う画像情報の型
type ModalImageInfo = {
  url: string;
  width: number;
  height: number;
  date: Date;
  text: string | null;
} | null;

export default function workPage() {
  const [StrapiResponses, setStrapiResponse] = useState<StrapiResponseWork>();
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState<ModalImageInfo>(null);
  const [imageLoaded, setImageLoaded] = useState(false); // 追加

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {StrapiResponses?.data.map((ent, index) => {
          const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${ent.Work.url}`;
          const imageWidth = ent.Work.width;
          const imageHeight = ent.Work.height;
          const imageDate = ent.Date;
          const imageText = ent.Text;

          return (
            <article
              key={ent.id.toString()}
              className="group bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition cursor-pointer aspect-square"
              onClick={() => {
                setModalImage({
                  url: imageUrl,
                  width: imageWidth,
                  height: imageHeight,
                  date: imageDate,
                  text: imageText,
                });
                setImageLoaded(false); // モーダル表示前に初期化
              }}
            >
              <div className="w-auto h-auto aspect-square relative">
                <Image
                  src={imageUrl}
                  alt={ent.Work.name.toString()}
                  fill
                  priority={index < 15} // 最初の3枚にのみ priority
                  className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </article>
          );
        })}
      </div>
      {modalImage && (
        <div
          className="fixed inset-0 flex bg-white items-center justify-center z-50 dark:bg-slate-800"
          onClick={() => setModalImage(null)}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src={modalImage.url}
                alt="Full"
                width={modalImage.width}
                height={modalImage.height}
                onLoad={() => setImageLoaded(true)}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] rounded shadow-lg"
              />
              {imageLoaded && (
                <span className="absolute bottom-2 right-2 text-xs text-red-600 px-2 py-1 rounded">
                  {/*{new Date(modalImage.date).toLocaleDateString()}*/}
                  {modalImage.date.toString()}
                </span>
              )}
            </div>
            {imageLoaded && (
              <p className="mt-4 text-sm text-gray-600 dark:text-white">
                {modalImage.text}
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
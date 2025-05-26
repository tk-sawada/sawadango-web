// utils/getBiographies.ts

import { StrapiResponseBiography } from "@/types/StrapiResponse";

export async function getBiographies(): Promise<StrapiResponseBiography> {

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/biographies?sort=date:asc&populate=*`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Biography: ${response.statusText}`);
  }
  const json = await response.json();
  return json;
}
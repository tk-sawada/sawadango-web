// utils/fetchWorks

import { StrapiResponseWork } from "@/types/StrapiResponse";

export async function fetchWorks(): Promise<StrapiResponseWork> {

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/works?sort=Date:desc&populate=*`);
  if (!response.ok) {
    throw new Error(`Failed to fetch biographies: ${response.statusText}`);
  };
  const json = await response.json();
  return json;
}
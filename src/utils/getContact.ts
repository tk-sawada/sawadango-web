// utils/getContact.ts

import { StrapiResponseContact } from "@/types/StrapiResponse";

export async function getContact(): Promise<StrapiResponseContact> {

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact?populate=*`);
  if (!response.ok) {
    throw new Error(`Failed to fetch contact: ${response.statusText}`);
  }
  const json = await response.json();
  return json;
}
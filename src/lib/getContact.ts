const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://192.168.1.11:1337/api";
const API_TOKEN = process.env.STRAPI_API_TOKEN || "";

export interface Contact {
  id: string;
  Instagram: string;
  Github: String;
  Email: String;
  publishedAt: Date;
}

// Contact取得
export async function getContact(): Promise<Contact> {

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact?populate=*`);
    if (!response.ok) {
    throw new Error(`Failed to fetch contact: ${response.statusText}`);
  }
  if (!response.ok) throw new Error(`Failed to fetch contact: ${response.statusText}`);
  const json = await response.json();
  return json.data;
}

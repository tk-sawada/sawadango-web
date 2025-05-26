const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://192.168.1.11:1337/api";
const API_TOKEN = process.env.STRAPI_API_TOKEN || "";

export interface Biography {
  id: string;
  date: Date;
  event: String;
  publishedAt: Date;
}

// Biography取得
export async function getBiographies(): Promise<Biography[]> {

  const response = await fetch(`${API_URL}/biographies?sort=date:asc&populate=*`);
  if (!response.ok) {
    throw new Error(`Failed to fetch biographies: ${response.statusText}`);
  }
  if (!response.ok) throw new Error(`Failed to fetch contact: ${response.statusText}`);
  const json = await response.json();
  return json.data.map((entry: any) => ({
    id: entry.id.toString(),
    date: entry.date,
    event: entry.event,
    publishedAt: entry.publishedAt,
  }));
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://192.168.1.11:1337/api";
const API_TOKEN = process.env.STRAPI_API_TOKEN || "";

// Biography取得
export async function fetchWorks(): Promise<StrapiResponse> {

  const response = await fetch(`${API_URL}/works?populate=*`);
  if (!response.ok) {
    throw new Error(`Failed to fetch biographies: ${response.statusText}`);
  }
  if (!response.ok) throw new Error(`Failed to fetch contact: ${response.statusText}`);
  const json = await response.json();
  return json;
}


export interface ImageFormat {
  name: String;
  hash: String;
  ext: String;
  mime: String;
  path: String | null;
  width: Number;
  height: Number;
  size: Number;
  sizeInBytes: Number;
  url: String;
}

export interface Formats {
  thumbnail: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
}

export interface Work {
  id: Number;
  documentId: String;
  name: String;
  alternativeText: String | null;
  caption: String | null;
  width: Number;
  height: Number;
  formats: Formats;
  hash: String;
  ext: String;
  mime: String;
  size: Number;
  url: String;
  previewUrl: String | null;
  provider: String;
  provider_metadata: any;
  createdAt: String;
  updatedAt: String;
  publishedAt: Date;
}


export interface Entry {
  id: Number;
  documentId: String;
  Date: Date;       // 元の JSON のキー名に合わせて大文字
  Tag: String;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Work: Work;
  /*
  hash: String;
  ext: String;
  mime: String;
  size: Number;
  url: String;
  previewUrl: String;
  provider: String;
  provider_metadata: String | null;
  // createdAt: Date;
  // updatedAt: Date;
  // publishedAt: Date;
  */
}
/*
        "hash": "DSC_01024_e1574172d2",
        "ext": ".JPG",
        "mime": "image/jpeg",
        "size": 978.65,
        "url": "/uploads/DSC_01024_e1574172d2.JPG",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "createdAt": "2025-05-11T04:57:58.342Z",
        "updatedAt": "2025-05-11T04:57:58.342Z",
        "publishedAt": "2025-05-11T04:57:58.342Z"
*/
export interface Pagination {
  page: Number;
  pageSize: Number;
  pageCount: Number;
  total: Number;
}

export interface Meta {
  pagination: Pagination;
}

export interface StrapiResponse {
  data: Entry[];
  meta: Meta;
}

// types/ImageFormat.ts

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: Number;
  height: Number;
  size: Number;
  sizeInBytes: Number;
  url: string;
}
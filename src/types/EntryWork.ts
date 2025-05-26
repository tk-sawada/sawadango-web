// types/EntryWork.ts

import { Work } from "./Work"

export interface EntryWork {
  id: number;
  documentId: string;
  Date: Date;
  Tag: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Text: string | null;
  Work: Work;
}
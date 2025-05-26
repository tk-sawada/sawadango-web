// types/EntryBiography.ts

export interface EntryBiography {
  id: number;
  documentId: string;
  date: Date;
  event: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string
  localizations?: EntryBiography;
}
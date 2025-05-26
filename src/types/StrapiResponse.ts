// types/StrapiResponse.ts

import { EntryWork } from "./EntryWork"
import { EntryBiography } from "./EntryBiography"
import { EntryContact } from "./EntryContact";
import { Meta } from "./Meta"

export interface StrapiResponseWork {
  data: EntryWork[];
  meta: Meta;
}

export interface StrapiResponseBiography {
  data: EntryBiography[];
  meta: Meta;
}

export interface StrapiResponseContact {
  data: EntryContact;
  meta: Meta;
}
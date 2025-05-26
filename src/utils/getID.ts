// utils/getID.ts

export function getID(biourl: string): string {
  const url = new URL(biourl);
  const segments = url.pathname.split("/").filter(Boolean);
  return segments[0] ?? "";
}
  
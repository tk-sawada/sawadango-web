// utils/getID.ts

export function getID(biourl: string): string {
    try {
      const url = new URL(biourl);
      const segments = url.pathname.split("/").filter(Boolean);
      return segments[0] ?? "";
    } catch (e: unknown) {
      console.error('Error caught in getID.ts:', e);
      return "";
    }
  }
  
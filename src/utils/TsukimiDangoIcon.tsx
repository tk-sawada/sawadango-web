"use client";

export default function TsukimiDangoIcon() {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 64 64"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke="black dark:stroke-white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >

      {/* 天板（横に出た部分） */}
      <rect x="12" y="35" width="40" height="5" rx="1" />

      {/* 本体（下の四角） */}
      <rect x="20" y="40" width="24" height="14" />

      {/* 円の装飾 */}
      <circle cx="32" cy="48" r="2.5" />

      {/* 団子6個（1 → 2 → 3段） */}
      <circle cx="32" cy="14" r="4.2" />
      <circle cx="26" cy="22" r="4.2" />
      <circle cx="38" cy="22" r="4.2" />
      <circle cx="20" cy="30" r="4.2" />
      <circle cx="32" cy="30" r="4.2" />
      <circle cx="44" cy="30" r="4.2" />
    </svg>
  );
}

"use client";
import { useEffect, useState } from "react";

function getMoonAge(date = new Date()): number {
  const synodicMonth = 29.53058867;
  const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14));
  const diff = date.getTime() - knownNewMoon.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  const moonAge = days % synodicMonth;
  return moonAge < 0 ? moonAge + synodicMonth : moonAge;
}

export default function TsukimiDangoIcon() {
  const [moonAge, setMoonAge] = useState<number | null>(null);

  useEffect(() => {
    setMoonAge(getMoonAge());
  }, []);

  if (moonAge === null) return null; // 初期化前

  const renderMoon = () => {
    if (moonAge < 1.5 || moonAge > 28) {
      return null;
    } else if (moonAge < 7.4) {
      return <path d="M57 10 A6 6 0 1 1 57 22 A3 6 0 1 0 57 10" fill="lightgray" />;
    } else if (moonAge < 13.8) {
      return <path d="M52 10 A6 6 0 1 1 52 22 L52 10 Z" fill="lightgray" />;
    } else if (moonAge < 15.8) {
      return <circle cx="52" cy="16" r="6" fill="yellow" />;
    } else if (moonAge < 22.1) {
      return <path d="M52 10 A6 6 0 1 1 52 22 A3 6 0 1 1 52 10" fill="lightgray" />;
    } else {
      return <path d="M57 10 A6 6 0 1 1 57 22 A3 6 0 1 0 57 10" fill="lightgray" />;
    }
  };

  return (
    <div className="max-w-[85vw] max-h-[85vh] flex items-center justify-center w-screen h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full stroke-black dark:stroke-white"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          preserveAspectRatio="xMidYMid meet"
        >
          {renderMoon()}
          {/* 団子 */}
          <circle cx="32" cy="14" r="4.2" className="fill-white" />
          <circle cx="26" cy="22" r="4.2" className="fill-white" />
          <circle cx="38" cy="22" r="4.2" className="fill-white" />
          <circle cx="20" cy="30" r="4.2" className="fill-white" />
          <circle cx="32" cy="30" r="4.2" className="fill-white" />
          <circle cx="44" cy="30" r="4.2" className="fill-white" />
          {/* 台座 */}
          <rect x="12" y="35" width="40" height="5" rx="1" />
          <rect x="20" y="40" width="24" height="14" />
          <circle cx="32" cy="48" r="2.5" />
        </svg>
      </div>
    </div>
  );
}

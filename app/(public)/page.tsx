"use client";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Redirect immediately when component mounts
    window.location.href = "https://midnight-madness.808dtp.com/";
  }, []);

  // Optional: You can return a simple loading message or null
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-white text-center">
        <p className="text-lg mb-4">Redirecting to Midnight Madness...</p>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500 mx-auto"></div>
      </div>
    </div>
  );
}

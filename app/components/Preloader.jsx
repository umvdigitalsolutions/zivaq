"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PRELOADER_KEY = "zivaq-preloader-seen";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const showFrame = useRef(null);
  const closing = useRef(false);

  const closePreloader = useCallback(() => {
    if (closing.current) return;
    closing.current = true;

    setLeaving(true);
    window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 450);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.sessionStorage.getItem(PRELOADER_KEY) === "true") {
      return;
    }

    window.sessionStorage.setItem(PRELOADER_KEY, "true");
    document.body.style.overflow = "hidden";

    showFrame.current = window.requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => {
      if (showFrame.current) {
        window.cancelAnimationFrame(showFrame.current);
      }
      document.body.style.overflow = "";
    };
  }, [closePreloader]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#fbf8f2] transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      aria-label="Loading ZivaQ Pharmaceuticals"
      role="status"
    >
      <video
        className="h-[100svh] w-screen object-contain sm:h-full sm:w-full sm:object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={closePreloader}
        onError={closePreloader}
      >
        <source src="/preloader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

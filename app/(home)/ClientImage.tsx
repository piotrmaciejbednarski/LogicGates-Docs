"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ClientImage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;

    const checkTheme = () => {
      setIsDarkTheme(htmlElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={isDarkTheme ? "/header_dark.png" : "/header.png"}
      alt="LogicGates Header"
      width={600}
      height={600}
      style={{
        marginBottom: "2rem",
      }}
    />
  );
}

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    // Funkcja sprawdzająca aktualny motyw
    const checkTheme = () => {
      setIsDarkTheme(htmlElement.classList.contains('dark'));
    };

    // Inicjalne sprawdzenie motywu
    checkTheme();

    // Konfiguracja obserwatora zmian
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });

    // Rozpocznij obserwację
    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Sprzątanie przy unmount
    return () => observer.disconnect();
  }, []);

  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Image
        src={isDarkTheme ? "/header_dark.png" : "/header.png"}
        alt="LogicGates Header"
        width={600}
        height={600}
        style={{
          marginBottom: '2rem',
        }}
      />

      {/* Reszta kodu pozostaje bez zmian */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Welcome to LogicGates
      </h1>

      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem', lineHeight: '1.6' }}>
      Say goodbye to massive Redstone circuits! This plugin introduces compact and efficient logic gates directly into your Spigot server.
      </p>

      <p>
        Explore the{' '}
        <Link
          href="/docs"
          style={{
            fontWeight: '600',
            textDecoration: 'underline',
          }}
        >
          documentation
        </Link>{' '}
        to get started.
      </p>
    </main>
  );
}
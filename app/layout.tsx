import { RootProvider } from 'fumadocs-ui/provider';
import 'fumadocs-ui/style.css';
import 'fumadocs-ui/css/dusk.css';
import 'fumadocs-twoslash/twoslash.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <meta name="description" content="Forget about giant Redstone logic gates. All logic gates in one block!" />
      <meta name="keywords" content="redstone, minecraft plugin, spigot, bukkit, mechanics, logic gates minecraft" />
      <meta name="author" content="Piotr Bednarski" />
      <link rel="icon" href="/favicon.ico" />
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider>
          {children}
          <Analytics />
        </RootProvider>
      </body>
    </html>
  );
}

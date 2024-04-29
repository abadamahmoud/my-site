import type { Metadata } from "next";


import "./globals.css";



export const metadata: Metadata = {
  title: "mab",
  description: "to be done later",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950">
        {children}
        </body>
    </html>
  );
}

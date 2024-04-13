import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Todo-app",
  description: "De Pe-erre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

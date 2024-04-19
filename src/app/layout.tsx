import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Box } from "./components/Box/Box";

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
        <Box>
        <Navbar/>
        {children}
        </Box>
      </body>
    </html>
  );
}

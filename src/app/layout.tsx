import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Box } from "./components/Box/Box";
import { Footer } from "./components/Footer/Footer";

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
          <Footer/>
        </Box>
      </body>
    </html>
  );
}

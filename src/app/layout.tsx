import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Box } from "./components/Box/Box";
import { Footer } from "./components/Footer/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "../../types/database.types";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Todo-app",
  description: "De Pe-erre",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body>
        {/* <Box> */}
        <Navbar user={user}/>
        {children}
        <Footer/>
        {/* </Box> */}
      </body>
    </html>
  );
}

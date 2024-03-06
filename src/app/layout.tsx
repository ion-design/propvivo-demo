import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import TopBar from "@/components/TopBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex h-full">
          <SideNavigation />
          <div className="flex flex-col overflow-auto w-full h-screen">
            <TopBar className="sticky top-0" />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

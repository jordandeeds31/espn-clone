import type { Metadata } from "next";
import "./globals.css";
import Scoreboard from "./components/scoreboard/Scoreboard";

export const metadata: Metadata = {
  title: "ESPN Clone",
  description: "ESPN Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>

      <body className="min-h-full flex flex-col">
        <Scoreboard />
        {children}
      </body>
    </html>
  );
}

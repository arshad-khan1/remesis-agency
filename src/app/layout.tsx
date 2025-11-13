import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agency - Digital Experiences That Convert",
  description: "We build innovative digital experiences that drive growth and engagement through cutting-edge design and strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="font-display bg-background-dark text-[#E0E0E0] antialiased"
      >
        {children}
      </body>
    </html>
  );
}

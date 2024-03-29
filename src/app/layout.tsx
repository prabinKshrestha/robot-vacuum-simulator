import Footer from "@/components/footers/footer";
import "./globals.css";

import Header from "@/components/headers/header";
import { Poppins } from "next/font/google";

const poppin = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Robot Vacuum Stimulation",
  description: "Stimulation for Robot Vacuum - Project by Prabin Kumar Shrestha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

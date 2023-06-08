import './globals.css';

import Footer from '@/components/footers/footer';
import Header from '@/components/headers/header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robot Vacuum Stimulation",
  description: "Stimulation for Robot Vacuum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

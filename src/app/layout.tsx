import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from '@/components/ui/header/Header';
import SidebarNav from '@/components/ui/navigation/SidebarNav';


const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export const metadata: Metadata = {
  title: "Holy Hands",
  description: "A platform for managing church assignments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = {
    name: "John Doe",
    congregation: "Spanish Fork 4th Ward"
  };

  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        <Header user={user} />
        <main className="max-w-site mx-auto pt-8 flex px-10">
          <nav className="w-64 pr-8">
            <SidebarNav />
          </nav>
          <div className="flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

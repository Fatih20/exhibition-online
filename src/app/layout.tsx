import MobileNotice from "./components/MobileNotice";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asa, Cerita, Wanita",
  description: "Sebuah pameran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden lg:block">{children}</div>
        <div className="block lg:hidden">
          <MobileNotice />
        </div>
      </body>
    </html>
  );
}

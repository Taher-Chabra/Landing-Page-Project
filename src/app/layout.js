import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "Portfolio Landing Page",
  description: "Demo Portfolio landing page created using create-next-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

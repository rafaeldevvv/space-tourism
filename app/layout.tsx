import "./globals.css";
import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";
import classes from "./utils/classes";

import Header from "./components/Header";
import Footer from "./components/Footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--ff-barlow-condensed",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const barlow = Barlow({
  subsets: ["latin"],
  variable: "--ff-barlow-normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--ff-bellefair",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: "Buckle up and prepare yourself to go to space!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classes(
        bellefair.variable,
        barlow.variable,
        barlowCondensed.variable
      )}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

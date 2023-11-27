import "./globals.css";
import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";
import classes from "./utils/classnames";

import Header from "./layout-components/Header";
import Footer from "./layout-components/Footer";
import PageWrapper from "./layout-components/PageWrapper";

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
  title: { template: "%s | Space Tourism", default: "Space Tourism" },
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
        <PageWrapper>
          <a href="#main-content" className="skipToContent">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}

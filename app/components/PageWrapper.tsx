"use client";

import { usePathname } from "next/navigation";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let pageName: string;

  if (pathname === "/") {
    pageName = "home";
  } else {
    /* 
      this replacement just goes well because
      navigation does not go deep
      /
      /destination
      /crew
      /technology
    */
    pageName = pathname.replace("/", "");
  }

  return (
    <div className={"pageWrapper " + pageName}>
      {children}
    </div>
  );
}

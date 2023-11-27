"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import classes from "../utils/classnames";
import utilities from "../shared-css/utility-classes.module.css";
import styles from "./header.module.css";
import components from "../shared-css/components.module.css";

interface ILink {
  name: string;
  href: string;
}

export default function GlobalHeader() {
  const pathname = usePathname();

  const links: ILink[] = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "destination",
      href: "/destination",
    },
    {
      name: "crew",
      href: "/crew",
    },
    {
      name: "technology",
      href: "/technology",
    },
  ];

  return (
    <>
      <header className={classes(styles.primaryHeader)}>
        <div
          className={classes(
            utilities.container,
            utilities.flex,
            styles.container
          )}
        >
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image
                src="/assets/shared/logo.svg"
                alt="space toursim logo"
                width={40}
                height={40}
                className={styles.logo}
              />
              <span className={utilities.srOnly}>Home page</span>
            </Link>
          </div>
          <Nav links={links} pathname={pathname} />
        </div>
      </header>
    </>
  );
}

export function Nav({ links, pathname }: { links: ILink[]; pathname: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const listId = "primary-navigation";

  return (
    <nav role="navigation" aria-label="Main menu">
      <MobileNavToggle
        controls={listId}
        onClick={() => setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
      />
      <PrimaryNavigation
        id={listId}
        links={links}
        isExpanded={isExpanded}
        pathname={pathname}
      />
    </nav>
  );
}

export function MobileNavToggle({
  isExpanded,
  controls,
  onClick,
}: {
  isExpanded: boolean;
  controls: string;
  onClick: () => void;
}) {
  const label = isExpanded ? "Close main menu" : "Open main menu";

  return (
    <button
      className={styles.mobileNavToggle}
      aria-expanded={isExpanded}
      aria-controls={controls}
      aria-haspopup="menu"
      aria-label={label}
      onClick={onClick}
    >
      <span className={utilities.srOnly}>{label}</span>
    </button>
  );
}

export function PrimaryNavigation({
  links,
  isExpanded,
  id,
  pathname,
}: {
  isExpanded: boolean;
  links: ILink[];
  id: string;
  pathname: string;
}) {
  return (
    <ul
      className={classes(
        components.underlineIndicators,
        styles.primaryNavigation,
        styles.underlineIndicators,
        isExpanded ? styles.active : "",
        utilities.flex
      )}
      id={id}
    >
      {links.map((l, index) => {
        return (
          <li
            key={l.name}
            className={classes(
              pathname === l.href ? `${styles.active} ${components.active}` : ""
            )}
          >
            <Link
              href={l.href}
              className={classes(
                utilities.uppercase,
                utilities.letterSpacing2,
                utilities.textLight,
                utilities.fs300,
                utilities.ffSansCond
              )}
            >
              <span aria-hidden="true">0{index}</span> {l.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

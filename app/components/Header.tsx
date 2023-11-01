"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import classes from "../utils/classes";
import styles from "./header.module.css";
import utilities from "../shared-css/utility-classes.module.css";
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
          <div>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/assets/shared/logo.svg"
                alt="space toursim logo"
                width={40}
                height={40}
              />
              <span className={utilities.srOnly}>Home page</span>
            </Link>
          </div>
          <div className={styles.line} role="presentation"></div>
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
      <MenuToggle
        listId={listId}
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

export function MenuToggle({
  isExpanded,
  listId,
  onClick,
}: {
  isExpanded: boolean;
  listId: string;
  onClick: () => void;
}) {
  const label = isExpanded ? "Close main menu" : "Open main menu";

  return (
    <button
      className={styles.menuToggle}
      aria-expanded={isExpanded}
      aria-controls={listId}
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
        isExpanded ? styles.active : ""
      )}
      id={id}
    >
      {links.map((l, index) => {
        return (
          <li
            key={l.name}
            className={classes(
              pathname === l.href ? styles.active : "",
              pathname === l.href ? components.active : ""
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

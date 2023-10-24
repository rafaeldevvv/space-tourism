import styles from "./index.module.css";
import Link from "next/link";
import classes from "./utils/classes";

export default function Home() {
  return (
    <div className={(classes(styles.container, styles.flex, styles.homepageContainer))}>
      <div className={styles.textWrapper}>
        <h1 className={styles.mainHeading}>
          <span
            className={classes(
              styles.uppercase,
              styles.ffSansCond,
              styles.letterSpacing1,
              styles.fs300,
              styles.textLight,
            )}
          >
            So you want to travel to{" "}
          </span>
          <span
            className={classes(
              styles.uppercase,
              styles.ffSerif,
              styles.letterSpacing2,
              styles.fs900
            )}
          >
            Space
          </span>
        </h1>
        <p className={classes(styles.textLight, styles.fs400)}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        href="/destination"
        className={classes(
          styles.largeButton,
          styles.uppercase,
          styles.ffSerif,
          styles.textDark,
          styles.uppercase,
          styles.bgWhite,
          styles.fs400,
          styles.letterSpacing2
        )}
      >
        explore
      </Link>
    </div>
  );
}

import components from "./shared-css/components.module.css";
import utilities from "./shared-css/utility-classes.module.css";
import homepageStyles from "./homepage.module.css";
import Link from "next/link";
import classes from "./utils/classes";

export default function Homepage() {
  return (
    <div className={utilities.container}>
      <div className={classes(homepageStyles.container, utilities.flex)}>
        <div className={homepageStyles.textWrapper}>
          <h1 className={homepageStyles.mainHeading}>
            <span
              className={classes(
                utilities.uppercase,
                utilities.ffSansCond,
                utilities.letterSpacing1,
                utilities.fs300,
                utilities.textLight
              )}
            >
              So you want to travel to{" "}
            </span>
            <span
              className={classes(
                utilities.uppercase,
                utilities.ffSerif,
                utilities.letterSpacing2,
                utilities.fs900
              )}
            >
              Space
            </span>
          </h1>
          <p className={classes(utilities.textLight, utilities.fs400)}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          href="/destination"
          className={classes(
            components.largeButton,
            homepageStyles.largeButton,
            utilities.uppercase,
            utilities.ffSerif,
            utilities.textDark,
            utilities.uppercase,
            utilities.bgWhite,
            utilities.fs400,
            utilities.letterSpacing2
          )}
        >
          explore
        </Link>
      </div>
    </div>
  );
}

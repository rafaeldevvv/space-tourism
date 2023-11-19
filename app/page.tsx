import components from "./shared-css/components.module.css";
import utilities from "./shared-css/utility-classes.module.css";
import homepageStyles from "./Homepage.module.css";
import Link from "next/link";
import classes from "./utils/classes";

import { Metadata } from "next";
export const metadata: Metadata = {
  
}

export default function Homepage() {
  return (
    <div className={classes(utilities.gridContainer, homepageStyles.gridContainer)}>
      <div className={homepageStyles.textWrapper}>
        <h1
          className={classes(
            homepageStyles.mainHeading,
            utilities.uppercase,
            utilities.ffSansCond,
            utilities.letterSpacing1,
            utilities.fs500,
            utilities.textLight
          )}
        >
          So you want to travel to{" "}
          <span
            className={classes(
              utilities.ffSerif,
              utilities.letterSpacing2,
              utilities.fs900,
              utilities.dBlock
            )}
          >
            Space
          </span>
        </h1>
        <p className={classes(utilities.textLight, utilities.fs400)}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <Link
          href="/destination"
          className={classes(
            components.largeButton,
            homepageStyles.largeButton,
            utilities.uppercase,
            utilities.ffSerif,
            utilities.textDark,
            utilities.bgWhite,
            utilities.letterSpacing2
          )}
        >
          explore
        </Link>
      </div>
    </div>
  );
}
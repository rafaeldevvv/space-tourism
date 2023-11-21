import utilityClasses from "../shared-css/utility-classes.module.css";
import styles from "./NumberedTitle.module.css"

import classes from "../utils/classes";

export default function NumberedTitle({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <div className={classes(utilityClasses.gridContainer, styles.gridContainer)}>
      <div>
        <h1 className={utilityClasses.numberedTitle}>
          <span>{String(number).padStart(2, "0")}</span> {title}
        </h1>
      </div>
      <div></div>
    </div>
  );
}

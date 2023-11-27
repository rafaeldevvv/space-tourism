import styles from "./GridContainerSkeleton.module.css";
import utilityClasses from "../shared-css/utility-classes.module.css";
import VisuallyHidden from "./VisuallyHidden";
import classes from "../utils/classnames";

export default function GridContainerSkeletong() {
  return (
    <div
      className={classes(utilityClasses.gridContainer, styles.gridContainer)}
    >
      <div>
        <VisuallyHidden>Loading</VisuallyHidden>
        <div className={styles.skeleton}></div>
      </div>
      <div>
        <div className={styles.skeleton}></div>
      </div>
    </div>
  );
}

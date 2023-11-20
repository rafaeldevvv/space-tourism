import VisuallyHidden from "./components/VisuallyHidden";
import utilityClasses from "./shared-css/utility-classes.module.css";
import classes from "./utils/classes";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={classes(utilityClasses.flex, styles.spinnerWrapper)}>
      <div className={styles.spinner}>
        <VisuallyHidden>Loading</VisuallyHidden>
      </div>
    </div>
  );
}

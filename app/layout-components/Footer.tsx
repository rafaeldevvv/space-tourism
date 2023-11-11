import styles from "./footer.module.css";
import utilities from "../shared-css/utility-classes.module.css";

export default function Footer() {
  return (
    <footer className={styles.primaryFooter}>
      <div className={utilities.container}>
        <p className={utilities.fs400}>
          Challenge by{" "}
          <a
            href="https://frontendmentor.io"
            target="_blank"
            className={utilities.textLight}
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://rafaeldevvv.github.io/portfolio"
            target="_blank"
            className={utilities.textLight}
          >
            Rafael Maia
          </a>
        </p>
      </div>
    </footer>
  );
}

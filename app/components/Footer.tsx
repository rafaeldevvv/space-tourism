import styles from "../index.module.css";

export default function Footer() {
  return (
    <footer className={styles.primaryFooter}>
      <div className={styles.container}>
        <p className={styles.fs400}>
          Challenge by{" "}
          <a
            href="https://frontendmentor.io"
            target="_blank"
            className={styles.textLight}
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://rafaeldevvv.github.io/portfolio"
            target="_blank"
            className={styles.textLight}
          >
            Rafael Maia
          </a>
        </p>
      </div>
    </footer>
  );
}

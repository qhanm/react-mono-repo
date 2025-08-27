import styles from "./style.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.line} />
        <div className={styles.menuWrapper}></div>
      </div>
    </div>
  );
}

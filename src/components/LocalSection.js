import Button from "@mui/joy/Button";
import styles from "./LocalSection.module.css";

const LocalSection = () => {
  return (
    <div className={styles.sendtypeInner}>
      <div className={styles.frameParent}>
        <Button size="lg" variant="outlined" color="neutral">
          Neutral
        </Button>
        <button className={styles.ellipseParent}>
          <div className={styles.whenCommunityComes}>International</div>
        </button>
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <div className={styles.whenCommunityComes}>USDT</div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <div className={styles.whenCommunityComes}>Bitcoin</div>
        </div>
      </div>
    </div>
  );
};

export default LocalSection;

import styles from "./SavingsCard.module.css";

const SavingsCard = ({ accountType }) => {
  return (
    <button className={styles.frameParent}>
      <div className={styles.whenCommunityComesUnityParent}>
        <div className={styles.whenCommunityComes}>{accountType}</div>
        <div className={styles.whenCommunityComes1}>$ 9.012,02</div>
      </div>
      <button className={styles.selectWrapper}>
        <div className={styles.select}>Select</div>
      </button>
    </button>
  );
};

export default SavingsCard;

import Header from "../components/Header";
import SavingsCard from "../components/SavingsCard";
import styles from "./Transfertab.module.css";

const Transfertab = () => {
  return (
    <div className={styles.transfertab}>
      <div className={styles.transfertabChild} />
      <Header componentTitle="Transfer" />
      <div className={styles.frameParent}>
        <div className={styles.whenCommunityComesUnityWrapper}>
          <div className={styles.whenCommunityComes}>Select account</div>
        </div>
        <div className={styles.frameGroup}>
          <SavingsCard accountType="Savings" />
          <SavingsCard accountType="Overdraft" />
        </div>
      </div>
    </div>
  );
};

export default Transfertab;

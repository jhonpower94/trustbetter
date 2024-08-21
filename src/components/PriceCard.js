import styles from "./PriceCard.module.css";

const PriceCard = () => {
  return (
    <div className={styles.iphone13ProMax8}>
      <div className={styles.card}>
        <div className={styles.frameParent}>
          <div className={styles.salaryCardParent}>
            <div className={styles.salaryCard}>Salary card</div>
            <div className={styles.div}>10,000$</div>
          </div>
          <img
            className={styles.frameChild}
            alt=""
            src="/frame-427320402@2x.png"
          />
        </div>
        <div className={styles.expiryParent}>
          <div className={styles.salaryCard}>••/••</div>
          <div className={styles.salaryCard}>•••• •••• •••• 3040</div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

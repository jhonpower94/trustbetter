import styles from "./CardForm.module.css";

const CardForm = ({ creditCardHolderNameCredi }) => {
  return (
    <div className={styles.frame}>
      <div className={styles.address}>{creditCardHolderNameCredi}</div>
      <div className={styles.frameParent}>
        <input
          className={styles.frame1}
          placeholder="Your user ID"
          type="text"
        />
        <button className={styles.frame2}>
          <div className={styles.copy}>Copy</div>
        </button>
      </div>
    </div>
  );
};

export default CardForm;

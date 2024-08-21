import styles from "./Kyc.module.css";

const Kyc = () => {
  return (
    <div className={styles.kyc}>
      <div className={styles.frame}>
        <button className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
        <div className={styles.kyc1}>KYC</div>
      </div>
      <div className={styles.verifyIdentificationParent}>
        <div className={styles.verifyIdentification}>Verify identification</div>
        <div className={styles.uploadAnyClear}>
          Upload any clear photo or scanned image of your identity document
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.address}>Document type</div>
        <select className={styles.frame2}>
          <option value="Select your country">Placeholder</option>
        </select>
      </div>
      <div className={styles.lightbuttonWrapper}>
        <button className={styles.lightbutton}>
          <div className={styles.uploadId}>Upload ID</div>
        </button>
      </div>
      <div className={styles.kycInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.doneWrapper}>
            <img className={styles.doneIcon} alt="" src="/done.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;

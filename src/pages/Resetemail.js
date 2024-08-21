import CoinnameBankSection from "../components/CoinnameBankSection";
import styles from "./Resetemail.module.css";

const Resetemail = () => {
  return (
    <div className={styles.resetemail}>
      <CoinnameBankSection
        bankName="Coinname Wallet"
        authButtonText="Reset email"
        rectangleIconAlignSelf="unset"
        rectangleIconHeight="unset"
        rectangleIconWidth="538px"
      />
      <div className={styles.frame}>
        <div className={styles.address}>Email</div>
        <input
          className={styles.frame1}
          placeholder="Enter Your Email"
          type="text"
        />
      </div>
      <div className={styles.lightbuttonParent}>
        <button className={styles.lightbutton}>
          <div className={styles.resetEmail}>Reset email</div>
        </button>
        <button className={styles.signInWrapper}>
          <button className={styles.signIn}>Sign in</button>
        </button>
      </div>
    </div>
  );
};

export default Resetemail;

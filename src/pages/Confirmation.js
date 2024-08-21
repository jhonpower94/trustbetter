import ActiveOn from "../components/ActiveOn";
import styles from "./Confirmation.module.css";

const Confirmation = () => {
  return (
    <div className={styles.confirmation}>
      <div className={styles.iconCheckParent}>
        <div className={styles.iconCheck}>
          <img className={styles.checkIcon} alt="" src="/check.svg" />
        </div>
        <div className={styles.aleksanderDmitrievichV}>
          Aleksander Dmitrievich V.
        </div>
        <div className={styles.div}>100$</div>
        <div className={styles.noCommission}>No commission</div>
        <div className={styles.noCommission}>Completed, 12 September 16:00</div>
      </div>
      <ActiveOn
        button="To Main"
        activeOnBackgroundColor="#0052ff"
        activeOnBorder="none"
        buttonFontWeight="unset"
        buttonFontFamily="Poppins"
        buttonDisplay="inline-block"
      />
    </div>
  );
};

export default Confirmation;

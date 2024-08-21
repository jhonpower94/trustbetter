import { currencyFormat } from "../config/services";
import styles from "./BalanceCard.module.css";
import FormButton from "./FormButton";

const BalanceCard = ({ type, data }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.accountypeParent}>
            <div className={styles.accountype}>{type}</div>
            <input
              className={styles.totalbalance}
              value={currencyFormat(data.balance)}
              name={type}
              onChange={()=>{}}
              type="text"
            />
          </div>
          <div className={styles.accountnumber}>{data.accountnumber}</div>
        </div>
        <button className={styles.showhidebalance}>
          <img className={styles.visibilityIcon} alt="" src="/visibility.svg" />
        </button>
      </div>
      <div className={styles.sendbuttonParent}>
        <FormButton iconCode="/send@2x.png" actionButtonText="Send" />
        <FormButton
          iconCode="/loan@2x.png"
          actionButtonText="Loan"
          propHeight="44px"
        />
        <FormButton
          iconCode="/wall-clock@2x.png"
          actionButtonText="History"
          propHeight="unset"
        />
      </div>
    </div>
  );
};

export default BalanceCard;

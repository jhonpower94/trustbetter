import Header from "../components/Header";
import PriceCard from "../components/PriceCard";
import CardForm from "../components/CardForm";
import Tabcontainer from "../components/Tabcontainer";
import styles from "./Card.module.css";

const CardPage = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <Header
          componentTitle="Card"
          notificationbuttonAlignSelf="unset"
          notificationbuttonFlex="1"
        />
      </div>
      <PriceCard />
      <div className={styles.frameParent}>
        <CardForm creditCardHolderNameCredi="Cardholder name" />
        <CardForm creditCardHolderNameCredi="Card security code " />
        <div className={styles.frame}>
          <div className={styles.address}>Card date</div>
          <div className={styles.frameWrapper}>
            <input
              className={styles.frame1}
              value="25"
              placeholder="09"
              type="text"
            />
          </div>
        </div>
        <div className={styles.lightbuttonWrapper}>
          <button className={styles.lightbutton}>
            <div className={styles.orderCard}>Order card</div>
          </button>
        </div>
      </div>
      <Tabcontainer
        tabcontainerHeight="16.43%"
        tabcontainerTop="83.57%"
        tabBackgroundColor="transparent"
        home="/home.svg"
        tabBackgroundColor1="transparent"
        swapHoriz="/swap-horiz.svg"
        creditCard="/credit-card.svg"
        tabBackgroundColor2="#0052ff"
      />
    </div>
  );
};

export default CardPage;

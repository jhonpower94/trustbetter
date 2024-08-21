import { useMemo } from "react";
import styles from "./CoinnameBankSection.module.css";

const CoinnameBankSection = ({
  bankName,
  authButtonText,
  rectangleIconAlignSelf,
  rectangleIconHeight,
  rectangleIconWidth,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: rectangleIconAlignSelf,
      height: rectangleIconHeight,
      width: rectangleIconWidth,
    };
  }, [rectangleIconAlignSelf, rectangleIconHeight, rectangleIconWidth]);

  return (
    <div className={styles.rectangleParent} style={frameDiv2Style}>
      <img className={styles.frameChild} alt="" src="/rectangle-1@2x.png" />
      <div className={styles.coinnameBankParent}>
        <div className={styles.coinnameBank}>{bankName}</div>
        <div className={styles.signIn}>{authButtonText}</div>
      </div>
    </div>
  );
};

export default CoinnameBankSection;

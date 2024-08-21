import { useMemo } from "react";
import styles from "./Header.module.css";

const Header = ({
  componentTitle,
  notificationbuttonAlignSelf,
  notificationbuttonFlex,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: notificationbuttonAlignSelf,
      flex: notificationbuttonFlex,
    };
  }, [notificationbuttonAlignSelf, notificationbuttonFlex]);

  return (
    <div className={styles.transferParent} style={frameDiv1Style}>
      <div className={styles.transfer}>{componentTitle}</div>
      <button className={styles.notificationbutton}>
        <img
          className={styles.notificationIcon}
          alt=""
          src="/notification.svg"
        />
      </button>
    </div>
  );
};

export default Header;

import styles from "./MessiCard.module.css";

const MessiCard = () => {
  return (
    <div className={styles.userinfoParent}>
      <button className={styles.userinfo}>
        <img
          className={styles.useravatarIcon}
          alt=""
          src="/useravatar@2x.png"
        />
        <div className={styles.welcomeBackParent}>
          <div className={styles.welcomeBack}>Welcome Back</div>
          <div className={styles.username}>Messi</div>
        </div>
      </button>
      <div className={styles.notificationbuttonParent}>
        <button className={styles.notificationbutton}>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
        </button>
        <button className={styles.notificationbutton}>
          <img className={styles.settingsIcon} alt="" src="/notification.svg" />
        </button>
      </div>
    </div>
  );
};

export default MessiCard;

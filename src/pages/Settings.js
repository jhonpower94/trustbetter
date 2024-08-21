import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.frameParent}>
        <button className={styles.image1Parent}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.rectangle36Copy5Parent}>
            <div className={styles.rectangle36Copy5} />
            <img className={styles.rightIcon} alt="" src="/right.svg" />
          </div>
        </button>
        <button className={styles.image1Parent}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.rectangle36Copy5Parent}>
            <div className={styles.rectangle36Copy5} />
            <img className={styles.rightIcon} alt="" src="/right.svg" />
          </div>
        </button>
        <button className={styles.image1Parent}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.rectangle36Copy5Parent}>
            <div className={styles.rectangle36Copy5} />
            <img className={styles.rightIcon} alt="" src="/right.svg" />
          </div>
        </button>
        <button className={styles.image1Parent}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.rectangle36Copy5Parent}>
            <div className={styles.rectangle36Copy5} />
            <img className={styles.rightIcon} alt="" src="/right.svg" />
          </div>
        </button>
      </div>
      <div className={styles.settingsInner}>
        <div className={styles.frameGroup}>
          <button className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </button>
          <div className={styles.settings1}>Settings</div>
        </div>
      </div>
      <div className={styles.settingsWrapper}>
        <img className={styles.settingsIcon} alt="" src="/settings.svg" />
      </div>
    </div>
  );
};

export default Settings;

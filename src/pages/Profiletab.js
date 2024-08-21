import styles from "./Profiletab.module.css";

const Profiletab = () => {
  return (
    <div className={styles.profiletab}>
      <div className={styles.profiletabInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <button className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </button>
            <div className={styles.profile}>Profile</div>
          </div>
          <img
            className={styles.frameChild}
            alt=""
            src="/frame-1000004299@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frame}>
          <div className={styles.address}>User ID</div>
          <div className={styles.frameDiv}>
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
        <div className={styles.frame}>
          <div className={styles.address}>Full name</div>
          <input
            className={styles.frame4}
            placeholder="Enter Your Email"
            type="text"
          />
        </div>
        <div className={styles.frame}>
          <div className={styles.address}>Email</div>
          <input
            className={styles.frame4}
            placeholder="Enter Your Email"
            type="text"
          />
        </div>
        <div className={styles.frame}>
          <div className={styles.address}>Country</div>
          <select className={styles.frame8}>
            <option value="Select your country">Placeholder</option>
          </select>
        </div>
        <div className={styles.frame}>
          <div className={styles.address}>Mobile number</div>
          <input
            className={styles.frame4}
            placeholder="Enter Your phone number"
            type="text"
          />
        </div>
        <div className={styles.lightbuttonWrapper}>
          <button className={styles.lightbutton}>
            <div className={styles.save}>Save</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profiletab;

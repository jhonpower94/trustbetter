import styles from "./RecentActivityCard.module.css";

const RecentActivityCard = ({ dimensionCode, messageStatus }) => {
  return (
    <button className={styles.frameParent}>
      <div className={styles.dribbbleParent}>
        <img className={styles.dribbbleIcon} alt="" src={dimensionCode} />
        <div className={styles.whenCommunityComesUnityParent}>
          <div className={styles.whenCommunityComes}>{messageStatus}</div>
          <div className={styles.minAgo}>40 Min ago</div>
        </div>
      </div>
      <b className={styles.whenCommunityComes1}>- $ 28,92</b>
    </button>
  );
};

export default RecentActivityCard;

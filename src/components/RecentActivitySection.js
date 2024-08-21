import RecentActivityCard from "./RecentActivityCard";
import styles from "./RecentActivitySection.module.css";

const RecentActivitySection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.whenCommunityComesUnityParent}>
        <div className={styles.whenCommunityComes}>Recent Activity</div>
        <button className={styles.whenCommunityComesUnityWrapper}>
          <div className={styles.whenCommunityComes1}>See All</div>
        </button>
      </div>
      <div className={styles.transactinlist}>
        <RecentActivityCard
          dimensionCode="/dribbble.svg"
          messageStatus="Sent 3436..."
        />
        <RecentActivityCard
          dimensionCode="/dribbble.svg"
          messageStatus="Received"
        />
        <RecentActivityCard
          dimensionCode="/dribbble.svg"
          messageStatus="Sent 3436..."
        />
        <RecentActivityCard
          dimensionCode="/dribbble.svg"
          messageStatus="Received"
        />
      </div>
    </div>
  );
};

export default RecentActivitySection;

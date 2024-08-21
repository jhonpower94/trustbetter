import MessiCard from "../components/MessiCard";
import BalanceCard from "../components/BalanceCard";
import RecentActivitySection from "../components/RecentActivitySection";
import styles from "./Hometab.module.css";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { useSelector } from "react-redux";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Hometab = () => {
  const savingsinfo = useSelector((state) => state.savingsInfos);
  const checkingsinfo = useSelector((state) => state.checkingsInfos);
  const [state, setState] = useState(0);
  const handleChangeIndex = (index) => {
    setState(index);
  };

  return (
    <div className={styles.hometab}>
      <MessiCard />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div style={{ width: "100%" }}>
            <AutoPlaySwipeableViews
              index={state}
              onChangeIndex={handleChangeIndex}
            >
              {[
                { type: "Savings", data: savingsinfo },
                { type: "Checkings", data: checkingsinfo },
              ].map((acct, index) => (
                <BalanceCard key={index} type={acct.type} data={acct.data} />
              ))}
            </AutoPlaySwipeableViews>
          </div>
          <div className={styles.slideindicators}>
            <button
              onClick={() => handleChangeIndex(0)}
              className={state === 0 ? styles.slidebutton : styles.slidebutton1}
            />
            <button
              onClick={() => handleChangeIndex(1)}
              className={state === 1 ? styles.slidebutton : styles.slidebutton1}
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.whenCommunityComesUnityParent}>
            <div className={styles.whenCommunityComes}>Total Sent</div>
            <div className={styles.whenCommunityComes1}>$2.423,92</div>
          </div>
          <div className={styles.whenCommunityComesUnityGroup}>
            <div className={styles.whenCommunityComes}>Total Received</div>
            <div className={styles.whenCommunityComes1}>$2.423,92</div>
          </div>
        </div>
        <RecentActivitySection />
        <img className={styles.loanIcon} alt="" src="/loan@2x.png" />
      </div>
    </div>
  );
};

export default Hometab;

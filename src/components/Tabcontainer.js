import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Tabcontainer.module.css";

const Tabcontainer = ({ tabcontainerHeight, tabcontainerTop }) => {
  const tabcontainerStyle = useMemo(() => {
    return {
      height: tabcontainerHeight,
      top: tabcontainerTop,
    };
  }, [tabcontainerHeight, tabcontainerTop]);

  const tabStyleactive = useMemo(() => {
    return {
      backgroundColor: "#0052ff",
    };
  });

  const tabStyle = useMemo(() => {
    return {
      backgroundColor: "#fff",
    };
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  });

  const ishome = location.pathname === "/";
  const isTransfer = location.pathname === "/transfer";
  const isCard = location.pathname === "/card";

  return (
    <div className={styles.tabcontainer} style={tabcontainerStyle}>
      <div className={styles.tabs}>
        <button
          onClick={() => navigate("/")}
          className={styles.tab}
          style={ishome ? tabStyleactive : tabStyle}
        >
          <HomeOutlinedIcon
            fontSize="large"
            htmlColor={ishome ? "#fff" : "#536471"}
          />
        </button>
        <button
          onClick={() => navigate("/transfer")}
          className={styles.tab1}
          style={isTransfer ? tabStyleactive : tabStyle}
        >
          <SwapHorizOutlinedIcon
            fontSize="large"
            htmlColor={isTransfer ? "#fff" : "#536471"}
          />
        </button>
        <button
          onClick={() => navigate("/card")}
          className={styles.tab1}
          style={isCard ? tabStyleactive : tabStyle}
        >
          <CreditCardOutlinedIcon
            fontSize="large"
            htmlColor={isCard ? "#fff" : "#536471"}
          />
        </button>
      </div>
    </div>
  );
};

export default Tabcontainer;

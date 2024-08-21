import { useMemo } from "react";
import styles from "./FormButton.module.css";
import { useNavigate } from "react-router-dom";

const FormButton = ({ path, iconCode, actionButtonText, propHeight }) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/transfer/send")} className={styles.sendbutton}>
      <div className={styles.sendParent} style={frameDivStyle}>
        <img className={styles.sendIcon} alt="" src={iconCode} />
        <div className={styles.send}>{actionButtonText}</div>
      </div>
    </button>
  );
};

export default FormButton;

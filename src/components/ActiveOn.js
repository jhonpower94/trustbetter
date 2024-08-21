import { useMemo } from "react";
import styles from "./ActiveOn.module.css";

const ActiveOn = ({
  button,
  activeOnBackgroundColor,
  activeOnBorder,
  buttonFontWeight,
  buttonFontFamily,
  buttonDisplay,
}) => {
  const activeOnStyle = useMemo(() => {
    return {
      backgroundColor: activeOnBackgroundColor,
      border: activeOnBorder,
    };
  }, [activeOnBackgroundColor, activeOnBorder]);

  const buttonStyle = useMemo(() => {
    return {
      fontWeight: buttonFontWeight,
      fontFamily: buttonFontFamily,
      display: buttonDisplay,
    };
  }, [buttonFontWeight, buttonFontFamily, buttonDisplay]);

  return (
    <div className={styles.activeon} style={activeOnStyle}>
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default ActiveOn;

import styles from "./Sendtype.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/joy/IconButton";
import { Container, Typography } from "@mui/joy";
import { Outlet } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";

const PageBackButton = () => {
  return (
    <form>
      <div className={styles.sendtype}>
        <AppBar
          elevation={0}
          style={{ borderBottom: "1px solid #d3d6dc" }}
          position="static"
          color="transparent"
        >
          <Toolbar>
            <IconButton variant="plain" sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>

            <Typography level="h3">Type</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Outlet />
        </Container>
      </div>
    </form>
  );
};

export default PageBackButton;

import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CoinnameBankSection from "../components/CoinnameBankSection";
import { auth } from "../config/firebaseinit";
import styles from "./Login.module.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [open, setOpen] = useState({
    open: false,
    message: "Incorrect login ",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleClose = () => {
    setOpen({ ...open, open: false });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    //set persistan
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, values.email, values.password);
      })
      .then((userCredential) => {
        // Signed in
        setLoading(false);
        navigate(navigate("/"));
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        setOpen({
          ...open,
          open: true,
          message: "Sorry incorrect login credentials",
        });
        setLoading(false);
      });
  };

  return (
    <form onSubmit={submitLogin}>
      <div className={styles.login}>
        <CoinnameBankSection
          bankName="Coinname Bank"
          authButtonText="Sign In"
        />

        <div className={styles.frameParent}>
          <div className={styles.frame}>
            <FormControl style={{ width: "100%" }}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                color="primary"
                size="lg"
                variant="soft"
                fullWidth
                name="email"
                onChange={handleChange}
                required
              />
            </FormControl>
          </div>
          <div className={styles.frame}>
            <FormControl style={{ width: "100%" }}>
              <FormLabel>Password</FormLabel>
              <Input
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                placeholder="Enter your password"
                color="primary"
                size="lg"
                variant="soft"
                fullWidth
                name="password"
                onChange={handleChange}
                endDecorator={
                  <IconButton
                    variant="plain"
                    color="neutral"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className={styles.lightbuttonParent}>
          <Button type="submit" loading={loading} size="lg" fullWidth>
            Login
          </Button>
          <div className={styles.forgotPasswordParent}>
            <button
              type="button"
              onClick={() => navigate("/auth/resetpass")}
              className={styles.forgotPassword}
            >
              Forgot Password?
            </button>
            <button
              type="button"
              onClick={() => navigate("/auth/register")}
              className={styles.forgotPassword}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

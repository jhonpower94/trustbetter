import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import PropTypes from "prop-types";
import React from "react";
import { IMaskInput } from "react-imask";
import CoinnameBankSection from "../components/CoinnameBankSection";
import { countrylist } from "../config/countrylist";
import styles from "./Signup.module.css";
import GetOtp from "./getotp";

const TextMaskAdapter = React.forwardRef(function TextMaskAdapter(props, ref) {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskAdapter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Signup = () => {
  const [otp, setOtp] = React.useState(null);
  const [values, setValues] = React.useState({
    numberformat: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
    country: "United States", // set up with reactlocalstorage
    countrycode: "US",
    mobilecode: "+1",
    marital: "Single",
    accountype: "Savings",
    gender: "Male",
    birthdate: new Date("2014-08-18T21:11:54"),
    imageid: "",
    image: "",
    otp: "",
    helpertext: { text: "", error: false },
    transactionpin: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className={styles.signup}>
      <CoinnameBankSection
        bankName="Coinname Bank"
        authButtonText="Sign Up"
        rectangleIconAlignSelf="stretch"
        rectangleIconHeight="223px"
        rectangleIconWidth="unset"
      />
      <div className={styles.frameParent}>
        <div className={styles.frame}>
          <Input
            placeholder="First name"
            color="primary"
            size="lg"
            variant="soft"
            fullWidth
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className={styles.frame}>
          <Input
            placeholder="Last name"
            color="primary"
            size="lg"
            variant="soft"
            fullWidth
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className={styles.frame}>
          <Input
            type="email"
            placeholder="Enter your email"
            color="primary"
            size="lg"
            variant="soft"
            fullWidth
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.frame}>
          <Input
            defaultValue={otp}
            placeholder="OTP"
            color="primary"
            size="lg"
            variant="soft"
            fullWidth
            name="otp"
            onChange={handleChange}
            required
            endDecorator={<GetOtp values={values} setOtp={setOtp} />}
          />
        </div>
        <div className={styles.frame}>
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
        </div>
        <div className={styles.frame}>
          <Select
            placeholder="Select Country"
            name="country"
            variant="soft"
            color="primary"
            required
            size="lg"
            sx={{ width: "100%" }}
            value={values.country}
            onChange={(e) => {
              var result = countrylist.filter(function (o) {
                return o.name == e.target.value;
              });
              setValues({
                ...values,
                [e.target.name]: e.target.value,
                countrycode: result[0].code,
                mobilecode: result[0].dial_code,
              });
            }}
          >
            {countrylist.map((ct, index) => (
              <Option key={index} value={ct.name}>
                {ct.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className={styles.frame}>
          <Input
            value={values.numberformat}
            onChange={(event) =>
              setValues({ ...values, numberformat: event.target.value })
            }
            placeholder="Placeholder"
            slotProps={{ input: { component: TextMaskAdapter } }}
          />
        </div>
      </div>
      <div className={styles.lightbuttonParent}>
        <button className={styles.lightbutton}>
          <div className={styles.createAccount}>Create account</div>
        </button>
        <button className={styles.alreadyHaveAnAccountParent}>
          <div className={styles.alreadyHaveAn}>Already have an account?</div>
          <button className={styles.signIn}>Sign in</button>
        </button>
      </div>
    </div>
  );
};

export default Signup;

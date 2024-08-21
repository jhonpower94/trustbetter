import { Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from "@mui/joy/Checkbox";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import PropTypes from "prop-types";
import React from "react";
import { IMaskInput } from "react-imask";
import { NumericFormat } from "react-number-format";
import CoinnameBankSection from "../components/CoinnameBankSection";
import { UploadPhoto } from "../components/uploadid";
import { countrylist } from "../config/countrylist";
import styles from "./Signup.module.css";
import GetOtp from "./getotp";
import Button from "@mui/joy/Button";
import { Timestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUsers, generateAccounts } from "../config/services";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseinit";

const maritalStatus = ["Single", "Married", "Divorced", "Widowed", "Other"];
const gender = ["Male", "Female", "Other"];
const accountype = ["Savings", "Cheking"];

const NumericFormatAdapter = React.forwardRef(function NumericFormatAdapter(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format="####"
      mask="*"
      minLength={4}
      maxLength={4}
    />
  );
});

NumericFormatAdapter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

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
  onChange: PropTypes.func.isRequired,
};

const Signup = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
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

  const handleChangeDate = (newValue) => {
    setValues({
      ...values,
      birthdate: newValue,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const datas = {
      admin: false,
      numberformat: values.numberformat,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      wallet_balance: 0,
      country: values.country,
      mobilecode: values.mobilecode,
      referrer: false,
      countrycode: values.countrycode,
      paymentallowed: 2,
      marital: values.marital,
      gender: values.gender,
      birthdate: values.birthdate,
      imageid: values.imageid,
      image: values.image,
      activated: false,
      Verificationstatus: false,
      btc_balance: 0,
      bnb_balance: 0,
      tron_balance: 0,
      eth_balance: 0,
      usdt_balance: 0,
      usdterc20_balance: 0,
      timestamp: Timestamp.now(),
      transactionpin: values.transactionpin,
    };

    if (values.otp != otp) {
      setValues({
        ...values,
        helpertext: { error: true, text: "Invalid OTP" },
      });
    } else {
      setLoading(!loading);
      createUserWithEmailAndPassword(auth, datas.email, datas.password)
        .then((user) => {
          console.log("user created");
          const userid = user.user.uid;
          addUsers(userid, datas)
            .then(() => {
              generateAccounts(userid);
            })
            .then(() => {
              setLoading(!loading);
              navigate("/");
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setLoading(!loading);
        });
    }
  };

  return (
    <form onSubmit={submitForm}>
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
              required
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
              required
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
              required
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
              required
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
              defaultValue={values.country}
              onChange={handleChange}
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
              variant="soft"
              color="primary"
              size="lg"
              fullWidth
              name="numberformat"
              required
              value={values.numberformat}
              onChange={(event) =>
                setValues({ ...values, numberformat: event.target.value })
              }
              placeholder="Mobile number"
              slotProps={{ input: { component: TextMaskAdapter } }}
            />
          </div>
          <div className={styles.frame}>
            <Select
              placeholder="Marital status"
              name="marital"
              variant="soft"
              color="primary"
              required
              size="lg"
              sx={{ width: "100%" }}
              defaultValue={values.marital}
              onChange={handleChange}
            >
              {maritalStatus.map((ms, index) => (
                <Option key={index} value={ms}>
                  {ms}
                </Option>
              ))}
            </Select>
          </div>
          <div className={styles.frame}>
            <Select
              placeholder="Select account type"
              name="accountype"
              variant="soft"
              color="primary"
              required
              size="lg"
              sx={{ width: "100%" }}
              defaultValue={values.accountype}
              onChange={handleChange}
            >
              {accountype.map((at, index) => (
                <Option key={index} value={at}>
                  {at}
                </Option>
              ))}
            </Select>
          </div>
          <div className={styles.frame}>
            <Input
              variant="soft"
              size="lg"
              color="primary"
              fullWidth
              type="date"
              name="birthdate"
              onChange={handleChangeDate}
            />
          </div>
          <div className={styles.frame}>
            <Input
              variant="soft"
              color="primary"
              size="lg"
              fullWidth
              value={values.transactionpin}
              name="transactionpin"
              onChange={handleChange}
              placeholder="Set Transaction pin"
              slotProps={{
                input: {
                  component: NumericFormatAdapter,
                },
              }}
            />
          </div>
          <div className={styles.frame}>
            <UploadPhoto values={values} setValues={setValues} />
          </div>
          <div className={styles.frame}>
            <Checkbox
              color="primary"
              label="I agree to terms, privacy and policy"
              size="lg"
              variant="soft"
              required
            />
          </div>
        </div>
        <div className={styles.lightbuttonParent}>
          <Button
            fullWidth
            type="submit"
            loading={loading}
            variant="solid"
            size="lg"
            color="primary"
            disabled={values.image.length > 0 ? false : true}
          >
            Create account
          </Button>
          <button className={styles.alreadyHaveAnAccountParent}>
            <div className={styles.alreadyHaveAn}>Already have an account?</div>
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;

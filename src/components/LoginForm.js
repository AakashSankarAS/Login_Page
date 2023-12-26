import "../styles/LoginForm.css";
import logo from "../assests/images/logo1.svg";
import mailicon from "../mailicon.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import AlertBootstrap from "./AlertBootstrap";
import useAlertHook from "../hooks/AlertHook";

function LoginForm() {
  const [dataObj, setdataObj] = useState({
    mail: "",
    pass: "",
  });
  const [isVisible, setVisible] = useState(false);
  //   const [alertStatus, setAlertStatus] = useState({
  //     isOpen: false,
  //     message: "",
  //   });

  const { showAlert, AlertToast } = useAlertHook();

  const lStorage = window.localStorage;
  const sStorage = window.sessionStorage;
  const handleChange = (event) => {
    if (event.target.name === "mail") {
      setdataObj({ mail: event.target.value, pass: dataObj.pass });
    } else if (event.target.name === "pass") {
      setdataObj({ mail: dataObj.mail, pass: event.target.value });
    }
  };
  const submit = () => {
    const mailValidExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailValidExpression.test(dataObj.mail)) {
      //   setAlertStatus({ isOpen: true, message: "Invalid Email" });
      showAlert("Invalid Email");
    } else {
      if (dataObj.pass.length !== 8) {
        // setAlertStatus({
        //   isOpen: true,
        //   message: "Password Must Contain 8 Characters",
        // });
        showAlert("Password Must Contain 8 Characters");
      } else {
        const myData = { mail: dataObj.mail, pass: dataObj.pass };
        lStorage.setItem("myData", JSON.stringify(myData));
        sStorage.setItem("myData", JSON.stringify(myData));
        console.log(JSON.parse(sStorage.getItem("myData")));
        // setAlertStatus({ isOpen: false, message: "" });
      }
    }
  };

  //   const close = () => {
  //     setAlertStatus({ isOpen: false, message: "" });
  //   };

  const makeVisible = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <div className="alert">
        <AlertToast />
        {/* <AlertBootstrap alert={alertStatus} close={close} /> */}
      </div>
      <div className="form">
        <img src={logo} alt="logo" className="img" />
        <h5>Login into your account</h5>
        <form>
          <label>Email Address</label>
          <br />
          <div className="inputcontainer">
            <input
              name="mail"
              type="email"
              placeholder="example@email.com"
              className="input"
              onChange={handleChange}
              id="email"
            />
            <span className="span">
              <img src={mailicon} width="15px" alt="Logo" />
            </span>
            <br />
          </div>
          <label>Password</label>
          <br />
          <div className="inputcontainer">
            <input
              name="pass"
              type={isVisible ? "text" : "password"}
              placeholder="Enter Your Password"
              className="input"
              maxLength="8"
              onChange={handleChange}
              id="password"
            />
            <button type="button" className="span2" onClick={makeVisible}>
              {isVisible ? (
                <i className="bi bi-eye-fill"></i>
              ) : (
                <i className="bi bi-eye-slash-fill"></i>
              )}
            </button>
            <br />
          </div>
          <a href="www.gooogle.com" className="forgot">
            Forgot Password?
          </a>
          <br />
          <button type="button" className="login" id="login" onClick={submit}>
            Login Now
          </button>
          <span className="spanhr">
            <hr />
            <p>OR</p>
            <hr style={{ justifySelf: "end" }} />
          </span>
          <a href="www.google.com" className="signup">
            Signup Now
          </a>
          <br />
        </form>
      </div>
    </div>
  );
}
export default LoginForm;

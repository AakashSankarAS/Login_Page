import LoginForm from "../components/LoginForm";
import LoginPrimaryImage from "../components/LoginPrimaryImage";
import mainimage from "../assests/images/center.svg";
import "../styles/LoginPage.css";
import useAlertHook from "../hooks/AlertHook";
function LoginPage() {
  const { AlertToast } = useAlertHook();
  return (
    <>
      <div className="gridContainer">
        <LoginForm />
        <LoginPrimaryImage mainimage={mainimage} />
      </div>
      <AlertToast />
    </>
  );
}
export default LoginPage;

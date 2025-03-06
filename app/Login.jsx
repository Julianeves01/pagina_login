import LoginForm from "./LoginForm";
import Image from "../components/Image";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Image />
      <LoginForm title="Login" />
    </div>
  );
};

export default Login;
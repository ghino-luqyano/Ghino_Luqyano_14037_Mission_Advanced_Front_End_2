import Header from "../components/Header";
import AuthForm from "../components/AuthForm";

function Login() {
  return (
    <>
      <Header type="auth" />
      <AuthForm type="login" />
    </>
  );
}

export default Login;

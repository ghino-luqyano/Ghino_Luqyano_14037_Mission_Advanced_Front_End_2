import Header from "../components/Header";
import AuthForm from "../components/AuthForm";

function Register() {
  return (
    <>
      <Header type="auth" />
      <AuthForm type="register" />
    </>
  );
}

export default Register;

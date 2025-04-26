import PropTypes from "prop-types";
import InputField from "./InputField";
import AuthButton from "./AuthButton";
import Divider from "./Divider";
import SocialLoginButton from "./SocialLoginButton";

function AuthForm({ type }) {
  return (
    <main className="bg-warning-background">
      <section className="h-full w-full">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-8 py-8 md:py-16">
          <div className="border-other-border bg-other-primary flex w-full flex-col items-center gap-8 rounded-lg border px-8 py-6 md:w-2/5">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-text-dark-primary text-2xl leading-[1.25] font-semibold tracking-tight md:text-3xl">
                {type === "login" ? "Masuk ke Akun" : "Pendaftaran Akun"}
              </h1>
              <span className="text-text-dark-secondary text-base font-normal tracking-tight">
                {type === "login"
                  ? "Yuk, lanjutin belajarmu di videobelajar."
                  : "Yuk, daftarkan akunmu sekarang juga!"}
              </span>
            </div>

            <form className="flex w-full flex-col gap-4">
              {type === "register" && (
                <>
                  <InputField
                    label="Nama Lengkap"
                    type="text"
                    name="name"
                    required
                  />
                  <InputField label="No. Hp" type="tel" name="phone" required />
                </>
              )}

              <InputField label="E-Mail" type="email" name="email" required />
              <InputField
                label="Kata Sandi"
                type="password"
                name="password"
                required
              />

              {type === "register" && (
                <InputField
                  label="Konfirmasi Kata Sandi"
                  type="password"
                  name="confirm-password"
                  required
                />
              )}

              <div className="flex flex-col text-right">
                {type === "login" && (
                  <a
                    href="#"
                    className="text-text-dark-secondary hover:text-text-dark-primary text-xs font-semibold tracking-tight transition"
                  >
                    Lupa Password?
                  </a>
                )}
              </div>

              <AuthButton
                text={type === "login" ? "Masuk" : "Daftar"}
                variant="primary"
              />
              <AuthButton
                text={type === "login" ? "Daftar" : "Masuk"}
                variant="secondary"
                link={type === "login" ? "/register" : "/login"}
              />

              <Divider />
              <SocialLoginButton />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

AuthForm.propTypes = {
  type: PropTypes.oneOf(["login", "register"]).isRequired,
};

export default AuthForm;

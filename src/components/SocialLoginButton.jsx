const googleLogo = "/images/vector/Google__G__logo.svg"; // Ensure the correct path

function SocialLoginButton() {
  return (
    <button className="border-other-border hover:bg-greyscale-100 flex w-full items-center justify-center rounded-md border px-4 py-2 transition">
      <img src={googleLogo} alt="Google Logo" className="mr-2 h-5 w-5" />
      <span className="text-text-dark-primary text-sm font-medium tracking-tight">
        Masuk dengan Google
      </span>
    </button>
  );
}

export default SocialLoginButton;

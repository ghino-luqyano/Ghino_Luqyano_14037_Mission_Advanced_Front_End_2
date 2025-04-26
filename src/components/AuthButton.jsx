import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function AuthButton({ text, variant = "primary", onClick, link }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (link) {
      event.preventDefault();
      navigate(link);
    } else if (onClick) {
      onClick(event);
    }
  };

  const styles = {
    primary:
      "bg-primary text-text-light-primary hover:bg-primary-400 cursor-pointer",
    secondary:
      "bg-primary-100 text-primary hover:bg-primary-200 cursor-pointer",
    outline:
      "border border-other-border text-text-dark-primary hover:bg-greyscale-100 cursor-pointer",
  };

  return (
    <button
      className={`w-full rounded-md px-4 py-2 text-sm font-semibold tracking-tight transition ${styles[variant]}`}
      onClick={handleClick}
      type={link ? "button" : "submit"}
    >
      {text}
    </button>
  );
}

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default AuthButton;

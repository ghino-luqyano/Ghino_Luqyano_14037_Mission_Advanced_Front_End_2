import { useState } from "react";
import PropTypes from "prop-types";

function InputField({ label, type, name, placeholder, required }) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+62");
  const [phoneNumber, setPhoneNumber] = useState("");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const countryCodes = [
    { code: "+62", flag: "🇮🇩" },
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+91", flag: "🇮🇳" },
  ];

  const selectedCountry = countryCodes.find(
    (item) => item.code === selectedCode,
  );

  const handleKeyDown = (event) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Enter",
      "Escape",
    ];

    if (
      (event.ctrlKey || event.metaKey) &&
      ["a", "c", "v", "x"].includes(event.key.toLowerCase())
    ) {
      return;
    }

    if (!/[0-9]/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;

    if (value.startsWith("0")) {
      setPhoneNumber(value);
      setTimeout(() => {
        setPhoneNumber(value.substring(1));
      }, 100);
    } else {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <label className="text-text-dark-secondary text-sm font-normal tracking-tight">
          {label}
        </label>
        {required && <span className="text-red-500">*</span>}
      </div>

      {type === "tel" ? (
        <div className="border-other-border flex w-full overflow-hidden rounded border">
          <div className="flex items-center justify-center bg-gray-200 px-3 py-2">
            {selectedCountry ? selectedCountry.flag : "🏳️"}
          </div>

          <select
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
            className="border-other-border border-r bg-white px-2 py-2 focus:outline-none"
          >
            {countryCodes.map((item) => (
              <option key={item.code} value={item.code}>
                {item.code}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name={name}
            required={required}
            placeholder={placeholder}
            className="focus:ring-secondary w-full px-4 py-2 focus:ring-2 focus:outline-none"
            value={phoneNumber}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <div className="relative">
          <input
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            name={name}
            required={required}
            placeholder={placeholder}
            className="border-other-border focus:ring-secondary w-full rounded border px-4 py-2 pr-10 placeholder:text-left focus:ring-2 focus:outline-none"
          />
          {type === "password" && (
            <ion-icon
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              className="text-greyscale-800 text-l absolute top-3 right-3 cursor-pointer"
              onClick={togglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            ></ion-icon>
          )}
        </div>
      )}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default InputField;

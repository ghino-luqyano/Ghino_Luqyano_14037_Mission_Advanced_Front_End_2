import PropTypes from "prop-types";

function Header({ type = "main" }) {
  return (
    <header className="border-other-border bg-other-primary w-full border-b shadow-xl md:shadow-none">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">
        {/* Logo */}
        <a href="/" className="block" aria-label="Home">
          <img
            src="/images/vector/Logo.svg"
            alt="Video Belajar Logo"
            className="h-auto w-32 md:w-48"
          />
        </a>

        {/* Main Header (Home Page) */}
        {type === "main" && (
          <>
            <div className="hidden w-1/6 flex-row items-center justify-center gap-6 md:flex">
              <nav aria-label="Primary Navigation">
                <a
                  href="#"
                  className="text-text-dark-primary hover:text-primary focus:ring-primary focus:ring-2 focus:outline-none"
                  role="menuitem"
                >
                  Kategori
                </a>
              </nav>
              <div className="hidden items-center gap-6 md:flex">
                <img
                  src="/images/avatar/Avatar.png"
                  alt="User Profile Avatar"
                  className="h-8 w-8 rounded-xs"
                />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="flex md:hidden"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <ion-icon name="menu-outline" className="text-3xl"></ion-icon>
            </button>
          </>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  type: PropTypes.oneOf(["main", "auth"]),
};

export default Header;

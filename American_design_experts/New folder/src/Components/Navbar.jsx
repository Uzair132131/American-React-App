import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiPhone, FiX, FiMail, FiChevronDown } from "react-icons/fi";

const menuItems = [
  { label: "Home" },
  {
    label: "Packages",
    dropdown: ["Web Design", "Logo", "Branding", "Ecommerce"],
  },
  { label: "About" },

  { label: "Contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div>
      {/* Blur overlay when drawer is open on mobile/tablet */}
      {drawerOpen && (
        <div className="drawer-blur-overlay" onClick={closeDrawer}></div>
      )}
      <div className="Header_main sticky-navbar">
        <div className="header_child navbar-flex">
          <div className="Logo_div">
            {/* Replace with your logo image or text */}
            <span className="logo-text">LOGO</span>
          </div>
          {/* Centered menu on desktop */}
          <ul className="inline-menu hide-on-mobile">
            {menuItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="dropdown-wrapper"
                  ref={dropdownRef}
                  style={{ display: "inline-block" }}
                >
                  <li
                    className="dropdown-parent"
                    onClick={() => setDropdownOpen((open) => !open)}
                  >
                    {item.label}
                    <FiChevronDown
                      className={`dropdown-arrow${dropdownOpen ? " open" : ""}`}
                    />
                    <ul
                      className={`dropdown-menu${dropdownOpen ? " show" : ""}`}
                    >
                      {item.dropdown.map((sub, idx) => (
                        <li key={sub + idx}>{sub}</li>
                      ))}
                    </ul>
                  </li>
                </div>
              ) : (
                <li key={item.label}>{item.label}</li>
              )
            )}
          </ul>
          <div className="right-section">
            <a
              href="mailto:info@example.com"
              className="circle-icon"
              aria-label="Email"
            >
              <FiMail className="icon-black" />
            </a>
            <a href="tel:1234567890" className="circle-icon" aria-label="Call">
              <FiPhone className="icon-black" />
            </a>
            {/* Hamburger menu only on mobile/tablet */}
            <FiMenu
              className="menu-icon show-on-mobile"
              onClick={handleDrawer}
            />
          </div>
        </div>
      </div>
      {/* Drawer only on mobile/tablet */}
      <div
        className={`drawer ${drawerOpen ? "open" : ""} show-on-mobile`}
        onClick={closeDrawer}
      >
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          <FiX className="close-icon" onClick={closeDrawer} />
          <ul className="drawer-menu">
            {menuItems.map((item) =>
              item.dropdown ? (
                <React.Fragment key={item.label}>
                  <li
                    className="drawer-dropdown-parent"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileDropdownOpen((open) => !open);
                    }}
                  >
                    {item.label}
                    <FiChevronDown
                      className={`drawer-dropdown-arrow${
                        mobileDropdownOpen ? " open" : ""
                      }`}
                    />
                  </li>
                  <div
                    className={`drawer-subitems-wrapper${
                      mobileDropdownOpen ? " open" : ""
                    }`}
                  >
                    {mobileDropdownOpen &&
                      item.dropdown.map((sub, idx) => (
                        <li key={sub + idx} className="drawer-subitem">
                          - {sub}
                        </li>
                      ))}
                  </div>
                </React.Fragment>
              ) : (
                <li key={item.label}>{item.label}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavbarDropdown = ({
  className,
  label,
  items = [],
  link,
  isActive,
  isNested,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`navbar-menu-item ${
        isNested ? "has-nested-dropdown" : "has-dropdown"
      } ${className}`}
      onClick={() => {
        if (typeof window !== "undefined" && window.innerWidth <= 900)
          setIsOpen((prev) => !prev);
      }}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <Link
        href={link || "#"}
        className={`navbar-dropdown-link ${isActive(link) ? " active" : ""}`}
      >
        {label}
      </Link>
      {/* <span className="navbar-dropdown-arrow">▼</span> */}

      <ul
        className={`${isNested ? "nested-dropdown" : "dropdown"}${
          isOpen ? " open" : ""
        }`}
      >
        {items.map((sub) =>
          sub.dropdown ? (
            <NavbarDropdown
              className="navbar-nested-dropdown"
              key={sub.label}
              items={sub.dropdown}
              isActive={isActive}
              label={sub.label}
              link={sub.link}
              isNested
            />
          ) : (
            <li key={sub.label} className="navbar-dropdown-item">
              <Link
                href={sub.link}
                className={`navbar-dropdown-link${
                  isActive(sub.link) ? " active" : ""
                }`}
              >
                {sub.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </li>
  );
};

export default NavbarDropdown;

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

  const dropdownClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== "undefined" && window.innerWidth <= 900)
      setIsOpen((prev) => !prev);
  };
  return (
    <li
      className={`navbar-menu-item ${
        isNested ? "has-nested-dropdown" : "has-dropdown"
      } ${className}`}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <Link
        href={link || "#"}
        className={`navbar-dropdown-link dropdown-trigger ${
          isActive(link) ? " active" : ""
        }`}
      >
        <span>{label}</span>
        <span
          className={`navbar-dropdown-arrow  ${isOpen ? "open" : ""}`}
          onClick={dropdownClickHandler}
        >
          <i className={`fa fa-angle-down `}></i>
        </span>
      </Link>

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

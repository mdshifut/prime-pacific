"use client";
import React, { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about-us" },
  {
    label: "Temporary Visa",
    link: "/temporary-visa",
    dropdown: [
      {
        label: "Visitor/ Holiday Visa Subclass 600",
        link: "/temporary-visa/visitor-visa-subclass-600",
      },
      {
        label: "Temporary Skill Shortage Visa Subclass 482",
        link: "/temporary-visa/temporary-skill-shortage-482-visa",
      },
      {
        label: "Subclass 485 Temporary Graduate Visa Australia",
        link: "/temporary-visa/subclass-485-temporary-graduate-visa-australia",
      },
    ],
  },
  {
    label: "Migration",
    dropdown: [
      {
        label: "Skilled Nominated Visas",
        link: "/migration/skilled-nominated-visas",
        dropdown: [
          {
            label: "Skilled Independent Visa SC 189",
            link: "/migration/skilled-nominated-visas/skilled-independent-visa-189",
          },
          {
            label: "Skilled Independent Visa SC 190",
            link: "/migration/skilled-nominated-visas/subclass-190-visa",
          },
        ],
      },
      {
        label: "Family Visas",
        link: "/migration/family-visas",
        dropdown: [
          {
            label: "Parent Visa Australia",
            link: "/migration/family-visas/parent-visa-australia",
          },
          {
            label: "Partner Visa Australia",
            link: "/migration/family-visas/partner-visa-australia",
          },
          {
            label: "Subclass 101- Child Visa Australia",
            link: "/migration/family-visas/subclass-101-child-visa-australia",
          },
          {
            label: "Visa 300 – Prospective Marriage Visa",
            link: "/migration/family-visas/visa-300-prospective-marriage-visa",
          },
        ],
      },
      {
        label: "Business Visas",
        link: "/migration/business-visas",
        dropdown: [
          {
            label: "188C Business Visa (Significant Investment)",
            link: "/migration/business-visas/188c-business-visa-significant-investment",
          },
          {
            label: "188B Business Visa (Investment)",
            link: "/migration/business-visas/188b-business-visa-investment",
          },
          {
            label:
              "Subclass 188 – Business Innovation and Investment  (Provisional) Visa",
            link: "/migration/business-visas/subclass-188-business-innovation-and-investment-provisional-visa",
          },
          {
            label:
              "Subclass 888 – Business Innovation and Investment   (Permanent) Visa",
            link: "/migration/business-visas/subclass-888-business-innovation-and-investment-permanent-visa",
          },
        ],
      },
      {
        label: "Student Visa",
        link: "/migration/student-visa",
        dropdown: [
          {
            label: "Subclass 500 Student Visa",
            link: "/migration/student-visa/subclass-500-student-visa",
          },
          {
            label: "Subclass 590 Student Guardian Visa",
            link: "/migration/student-visa/subclass-590-student-guardian-visa",
          },
          {
            label: "Australia Student Visa Extension",
            link: "/migration/student-visa/australia-student-visa-extension",
          },
        ],
      },
      {
        label: "Subclass 491 Skilled Regional (Provisional) Visa",
        link: "/migration/subclass-491-skilled-regional-provisional-visa",
      },
      {
        label: "Australian Tourist Visa",
        link: "/migration/australian-tourist-visa",
      },
      {
        label: "494 Visa",
        link: "/migration/494-visa",
      },
      {
        label: "Australian Refugee Visa",
        link: "/migration/australian-refugee-visa",
      },
    ],
  },
  {
    label: "Other Visa's",
    dropdown: [
      {
        label: "866 Visa – Protection Visa",
        link: "/other-visas/866-visa-protection-visa",
      },
      {
        label: "Subclass 116 – Carer Visa",
        link: "/other-visas/subclass-116-carer-visa",
      },
      {
        label: "Subclass 117 – Orphan Visa",
        link: "/other-visas/subclass-117-orphan-visa",
      },
      {
        label: "Subclass 445 – Dependent Child Visa",
        link: "/other-visas/subclass-445-dependent-child-visa",
      },
      {
        label: "Subclass 602 – Medical Treatment Visa",
        link: "/other-visas/subclass-602-medical-treatment-visa",
      },
      {
        label: "Work and Holiday Visa Australia – 462 Visa",
        link: "/other-visas/work-and-holiday-visa-australia-462-visa",
      },
      {
        label: "Working Holiday Visa Australia – Visa 417 for young adults",
        link: "/other-visas/working-holiday-visa-australia-visa-417-for-young-adults",
      },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Skilled Occupation List",
        link: "/resources/skilled-occupation-list",
      },
      {
        label: "Core Skills Occupation List (CSOL)",
        link: "/resources/core-skills-occupation-list-csol",
      },
      { label: " Life In Australia", link: "/resources/life-in-australia" },
    ],
  },
  //   { label: "Pr Points Calculator", link: "/pr-points-calculator" },
  { label: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Track mobile/desktop mode
  //   const [isMobile, setIsMobile] = useState(false);
  //   React.useEffect(() => {
  //     const checkMobile = () => {
  //       setIsMobile(window.innerWidth <= 900);
  //     };
  //     checkMobile();
  //     window.addEventListener("resize", checkMobile);
  //     return () => window.removeEventListener("resize", checkMobile);
  //   }, []);

  // Helper to check active route
  const isActive = (link) => {
    if (!link) return false;
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <img src="/logo-t.jpg" alt="Logo" height={40} />{" "}
          <span>Prime Pacific</span>
        </Link>
      </div>
      <button
        className="navbar-hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="navbar-hamburger-bar" />
        <span className="navbar-hamburger-bar" />
        <span className="navbar-hamburger-bar" />
      </button>
      <ul className={`navbar-menu ${mobileOpen ? " open" : ""}`}>
        {menuItems.map((item, idx) =>
          item.dropdown ? (
            <NavbarDropdown
              key={item.label}
              items={item.dropdown}
              isActive={isActive}
              label={item.label}
              link={item.link}
            />
          ) : (
            <li key={item.label} className={`navbar-menu-item `}>
              <Link
                className={`navbar-menu-link${
                  isActive(item.link) ? " active" : ""
                }`}
                href={item.link}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

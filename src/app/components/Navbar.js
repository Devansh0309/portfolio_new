import Image from "next/image";
import React from "react";
import companyLogo from "../../../public/logo2.PNG";

export default function Navbar() {
  return (
    <div className="nav-content">
      <div className="nav-left">
        <Image
          width="128"
          height="16"
          src={companyLogo}
          alt="image"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        />
      </div>
      <div className="nav-right">
        <span
          onClick={() => {
            const el = document.getElementsByClassName("header-content")[0];
            el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About me |
        </span>
        <span
          onClick={() => {
            const el = document.getElementsByClassName(
              "recommendations-content"
            )[0];
            el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {" "}
          Recommendations |
        </span>
        <span
          onClick={() => {
            const el = document.getElementsByClassName(
              "about-stellar-content"
            )[0];
            el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {" "}
          Why join Stellar? |
        </span>
        <span
          onClick={() => {
            const el = document.getElementsByClassName("contacts-content")[0];
            el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </span>
      </div>
    </div>
  );
}

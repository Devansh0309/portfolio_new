import Image from "next/image";
import React from "react";
import personImg from "../../../public/pratibha.jpeg";
import Button from "@mui/material/Button";
// import headerBackground from "../../../public/headerBackground.jpg";
import Link from "next/link";

export default function Header() {
  const styleObj = {
    "&:hover": {
      backgroundColor: "#ade37b",
    },
    "&:active": {
      backgroundColor: "#ade37b",
    },
    backgroundColor: "#2f4f4f",
  };

  return (
    <div className="header-content">
      <div className="header-left">
        <div className="header-left-content">
          <span className="header-left-heading">Coaches in </span>
          <span className="points">Reasoning</span>

          <span className="points">GRE</span>

          <span className="points">GMAT</span>

          <span className="points">SAT</span>

          <span className="points">UCAT</span>

          <span className="points"> Online Classes</span>
        </div>
        <div className="header-left-content">
          <span className="header-left-heading">Skills </span>
          <span className="points">Team Management</span>

          <span className="points">Management</span>

          <span className="points">Training</span>

          <span className="points">Project Management</span>

          <span className="points">Strategic Planning</span>

          <span className="points">Analytics</span>
        </div>
        <div className="header-left-content">
          <span className="header-left-heading">Experience </span>
          <span className="points">
            <h4 className="position">Founder & Coach</h4>
            <div className="organization">Stellar Practice</div>
          </span>

          <span className="points">
            <h4 className="position">Academic Head</h4>
            <div className="organization">Stellar Practice</div>
          </span>

          <span className="points">
            <h4 className="position">Founder & Coach</h4>
            <div className="organization">Stellar Practice</div>
          </span>

          <span className="points">
            <h4 className="position">Founder & Coach</h4>
            <div className="organization">Stellar Practice</div>
          </span>

          <span className="points">
            <h4 className="position">Founder & Coach</h4>
            <div className="organization">Stellar Practice</div>
          </span>

          <span className="points">
            <h4 className="position">Founder & Coach</h4>
            <div className="organization">Stellar Practice</div>
          </span>
        </div>
      </div>
      <div className="header-right">
        <Image
          width="250"
          height="250"
          src={personImg}
          alt="image"
          style={{
            borderRadius: "20px",
            boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
          }}
        />
        <h3>Pratibha Paliwal</h3>
        <Button variant="contained" disableRipple sx={styleObj}>
          <Link
            href="https://www.linkedin.com/in/pratibhapaliwal"
            target="_blank"
          >
            More about me
          </Link>
        </Button>
      </div>
    </div>
  );
}

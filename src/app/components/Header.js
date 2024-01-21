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
        <h1 style={{ color: "#2f4f4f" }}>Know Coach</h1>
        <div className="header-left-content">
          <span className="header-left-heading">Coaches in </span>
          <span className="points">
            <span className="point">Reasoning</span>

            <span className="point">GRE</span>

            <span className="point">GMAT</span>

            <span className="point">SAT</span>

            <span className="point">UCAT</span>

            <span className="point"> Online Classes</span>
          </span>
        </div>
        <div className="header-left-content">
          <span className="header-left-heading">Skills </span>
          <span className="points">
            <span className="point">Team Management</span>

            <span className="point">Management</span>

            <span className="point">Training</span>

            <span className="point">Project Management</span>

            <span className="point">Strategic Planning</span>

            <span className="point">Analytics</span>
          </span>
        </div>
        <div className="header-left-content">
          <span className="header-left-heading">Experience </span>
          <span className="points">
            <span className="point">
              <h4 className="position">Founder & Coach</h4>
              <div className="organization">Stellar Practice</div>
            </span>

            <span className="point">
              <h4 className="position">Academic Head</h4>
              <div className="organization">The Princeton Review</div>
            </span>

            <span className="point">
              <h4 className="position">Academic Head</h4>
              <div className="organization">Jamboree Edu. Pvt. Ltd.</div>
            </span>

            <span className="point">
              <h4 className="position">Sr. Knowledge Expert</h4>
              <div className="organization">T.I.M.E.</div>
            </span>

            <span className="point">
              <h4 className="position">Sr. Trainer </h4>
              <div className="organization">Jamboree Edu. Pvt. Ltd.</div>
            </span>

            <span className="point">
              <h4 className="position">Management Intern</h4>
              <div className="organization">Indian Airlines Limited</div>
            </span>
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

import Image from "next/image";
import React, { useState } from "react";
import personImg from "../../../public/pratibha.jpeg";
import Button from "@mui/material/Button";
// import headerBackground from "../../../public/headerBackground.jpg";
import Link from "next/link";

export default function Header() {
  const [points, setpoints] = useState([
    {
      heading: "Coaches in ",
      points: [
        { key1: "Reasoning", key2: "" },
        { key1: "GRE", key2: "" },
        { key1: "GMAT", key2: "" },
        { key1: "SAT", key2: "" },
        { key1: "UCAT", key2: "" },
        { key1: "Online Classes", key2: "" },
      ],
    },
    {
      heading: "Skills ",
      points: [
        { key1: "Team Management", key2: "" },
        { key1: "Management", key2: "" },
        { key1: "Training", key2: "" },
        { key1: "Project Management", key2: "" },
        { key1: "Strategic Planning", key2: "" },
        { key1: "Analytics", key2: "" },
      ],
    },
    {
      heading: "Experience ",
      points: [
        { key1: "Founder & Coach", key2: "Stellar Practice" },
        { key1: "Academic Head", key2: "The Princeton Review" },
        { key1: "Academic Head", key2: "Jamboree Edu. Pvt. Ltd." },
        { key1: "Sr. Knowledge Expert", key2: "T.I.M.E." },
        { key1: "Sr. Trainer ", key2: "Jamboree Edu. Pvt. Ltd." },
        { key1: "Management Intern", key2: "Indian Airlines Ltd." },
      ],
    },
  ]);
  
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
        <h1 className="about-me-heading">Know Coach</h1>
        {points.map((item) => (
          <div key={item.heading} className="header-left-content">
            <span className="header-left-heading">{item.heading}</span>
            <span className="points">
              {item.points.map((item2, index) => (
                <span className="point" key={item2.key1 + index}>
                  <h4 className="position">{item2.key1}</h4>
                  {item2.key2 ? (
                    <div className="organization">{item2.key2}</div>
                  ) : null}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="header-right">
        <Image
          width="250"
          height="250"
          src={personImg}
          alt="image"
          className="about-me-img"
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

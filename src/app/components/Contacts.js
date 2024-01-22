import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

let socialContacts = [
  {
    icon: <FaLinkedin style={{ fontSize: "32px", color: "#0a66c2" }} />,
    target: "https://www.linkedin.com/in/pratibhapaliwal",
  },
  {
    icon: <FaFacebookSquare style={{ fontSize: "32px", color: "#0a66c2" }} />,
    target: "https://www.facebook.com/profile.php?id=100064144080659",
  },
  {
    icon: (
      <FaInstagram
        style={{
          fontSize: "32px",
          background:
            "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
          color: "#fff",
          borderRadius: "10px"
        }}
      />
    ),
    target: "https://www.instagram.com/stellarpractice/",
  },
  {
    icon: <FaYoutube style={{ fontSize: "32px", color: "red" }} />,
    target: "https://www.youtube.com/@StellarPractice",
  }
];

export default function Contacts() {
  return (
    <div className="contacts-content">
      <div className="social-contacts">
        {socialContacts.map((item, index) => (
          <Link key={index} href={item.target} target="_blank">
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

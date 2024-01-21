import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contacts() {
  const [socialContacts, setSocialContacts] = useState([
    {
      icon: <FaLinkedin style={{ fontSize: "32px" }} />,
      target: "https://www.linkedin.com/in/pratibhapaliwal",
    },
    {
      icon: <FaLinkedin style={{ fontSize: "32px" }} />,
      target: "https://www.linkedin.com/in/pratibhapaliwal",
    },
    {
      icon: <FaLinkedin style={{ fontSize: "32px" }} />,
      target: "https://www.linkedin.com/in/pratibhapaliwal",
    },
  ]);
  return (
    <div className="contacts-content">
      <div className="social-contacts">
        {socialContacts.map((item, index) =><Link key={index}
            href={item.target}
            target="_blank"
          >
            {item.icon}
          </Link>)}
      </div>
    </div>
  );
}

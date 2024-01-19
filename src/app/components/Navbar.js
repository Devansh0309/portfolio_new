"use client"
import Image from "next/image";
import React from "react";
import companyLogo from "../../../public/logo2.png";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const navigate = useRouter()
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
        <span onClick={()=>{
          navigate.push("./Header")
        }}>About me |</span>
        <span onClick={()=>{
          navigate.push("./Recommendations")
        }}> Recommendations |</span>
        <span onClick={()=>{
          
        }}> Why join Stellar? |</span>
        <span onClick={()=>{
          
        }}>LinkedIn posts</span>
      </div>
    </div>
  );
}

import React from "react";
import stellarLogo2 from "../../../public/stellarLogo2.PNG";
import Image from "next/image";
let keyPoints = [
  " Coaching for building high mental clarity & mental Stamina!.",
  " Industry: Education Management.",
  " Company size: 2-10 employees.",
]
export default function AboutStellar() {
  
  return (
    <div className="about-stellar-content">
      <Image src={stellarLogo2} className="stellar-img" alt="not found"/>
      <div className="key-points">
        {keyPoints.map((item) => (
          <div key={item}>
            <span className="key-points-arrow">-</span>
            <span> </span>
            <span className="key-point-content">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import stellarLogo2 from "../../../public/stellarLogo2.PNG";
import Image from "next/image";

export default function AboutStellar() {
  const [keyPoints, setKeyPoints] = useState([
    " Coaching for building high mental clarity & mental Stamina!.",
    " Industry: Education Management.",
    " Company size: 2-10 employees.",
  ]);
  return (
    <div className="about-stellar-content">
      <Image src={stellarLogo2} />
      <div className="key-points">
        {keyPoints.map((item) => (
          <div key={item}>
            <span className="key-points-arrow">{"->"} </span>
            <span className="key-point-content">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

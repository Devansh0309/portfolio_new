import React from "react";
import stellarLogo2 from "../../../public/stellarLogo2.png";
import Image from "next/image";

export default function AboutStellar() {
  return (
    <div className="about-stellar-content">
      <Image src={stellarLogo2} />
      <div className="key-points">
        <div>
          <span className="key-points-arrow">{"->"} </span>
          <span className="key-point-content">
            Coaching for building high mental clarity & mental Stamina!.
          </span>
        </div>
        <div>
          <span className="key-points-arrow">{"->"} </span>
          <span className="key-point-content">
            Industry: Education Management.
          </span>
        </div>
        <div>
          <span className="key-points-arrow">{"->"} </span>
          <span className="key-point-content">
            Company size: 2-10 employees.
          </span>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function RecommendCard({
  name,
  profession,
  recommendation,
  date,
  personImg,
  refs,
}) {
  return (
    <div className="recommendCard-content" ref={refs}>
      <Image src={personImg} alt="not found" width="300" height="300" />
      <div className="below-content">
        <div className="name-and-date">
          <span>{name}</span>
          <span> </span>
          { date}
        </div>
        <div className="profession">{profession}</div>
        <div className="recommendation">{recommendation}</div>
      </div>
    </div>
  );
}

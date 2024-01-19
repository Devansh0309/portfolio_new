import React from "react";
import ActionAreaCard from "../elements/card";

export default function Recommendations() {
  return (
    <div className="recommendations-content">
      Recommendations
      <ActionAreaCard
        name="Anurag Kalra"
        description=""
        work="Great teacher and personal coach for every student, experience
            speaks up at every moment in class!"
        date="May 17, 2019"
      />
    </div>
  );
}

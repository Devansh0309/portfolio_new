"use client"
import React, { useEffect, useRef, useState } from "react";
import personImg1 from "../../../public/Recommender1.jpeg";
import RecommendCard from "../elements/card";

export default function Recommendations() {
  const viewElement = useRef(null);
  const [recommends, setRecommends] = useState([
    {
      name: "Anurag Kalra",
      profession:
        "Automotive Application expert in the field plastics, rubbers and other interior laminates over plastics",
      recommendation:
        "Great teacher and personal coach for every student, experience speaks up at every moment in class!",
      date: "May 17, 2019",
      personImg: personImg1,
      ref: viewElement,
    },
    {
      name: "Anurag Kalra",
      profession:
        "Automotive Application expert in the field plastics, rubbers and other interior laminates over plastics",
      recommendation:
        "Great teacher and personal coach for every student, experience speaks up at every moment in class!",
      date: "May 17, 2019",
      personImg: personImg1,
      ref: null,
    },
    {
      name: "Anurag Kalra",
      profession:
        "Automotive Application expert in the field plastics, rubbers and other interior laminates over plastics",
      recommendation:
        "Great teacher and personal coach for every student, experience speaks up at every moment in class!",
      date: "May 17, 2019",
      personImg: personImg1,
      ref: viewElement,
    },
    
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const doClick = () => {
    viewElement.current?.scrollIntoView({ behavior: "smooth" });
    // console.log("inside doClick", recommends, currentIndex);
  };

  const changeCardsRef = (x) => {
    // console.log("inside changeImages", currentIndex + x);
    const testimonials = recommends;
    for (let i = 0; i < testimonials.length; i++) {
      if (i !== currentIndex + x) {
        testimonials[i].ref = null;
      } else testimonials[i].ref = viewElement;
    }
    setRecommends(testimonials);
    setCurrentIndex(currentIndex + x);
  };

  useEffect(() => {
    // console.log("inside useEffect", recommends, currentIndex);
    doClick();
  }, [currentIndex]);

  return (
    <div className="recommends">
      <div
        className="recommendations-content"
        style={{
          width: `calc(${
            0.8 *window.innerWidth < 300 * recommends.length
              ? 0.8 *window.innerWidth
              : 300 * recommends.length
          }px)`,
        }}
      >
        {currentIndex > 0 ? (
          <button
            className="left-btn"
            onClick={() => {
              console.log("inside left btn");
              changeCardsRef(-1);
            }}
          >
            {"<"}
          </button>
        ) : null}

        {recommends.map((item, index) => (
          <RecommendCard
            name={item.name}
            profession={item.profession}
            recommendation={item.recommendation}
            date={item.date}
            personImg={item.personImg}
            key={item.profession + index}
            refs={item.ref}
          />
        ))}
        {currentIndex < recommends.length - 1 ? (
          <button
            className="right-btn"
            onClick={() => {
              // console.log("inside right btn");
              changeCardsRef(+1);
            }}
          >
            {">"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

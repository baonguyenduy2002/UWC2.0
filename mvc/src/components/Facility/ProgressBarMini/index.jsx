import React, { useState, useEffect } from "react";
import "./ProgressBarMini.css";
import ProgressBarBaseMini from "../ProgressBarBaseMini/index";

const ProgressBarMini = (props) => {
  const [completedPart, setCompletedPart] = useState(0);
  useEffect(() => {
    setCompletedPart(props.status);
  }, [completedPart]);

  return (
    <div
      className="ProgressBarContainer-mini"
      style={{
        width: "fit-content",
        height: props.size === "big" ? 80 : 50,
      }}
    >
      <ProgressBarBaseMini
        size={props.size}
        bgColor={
          completedPart > 90
            ? "#E25959"
            : completedPart > 60
            ? "#FC8965"
            : completedPart > 30
            ? "#FCF665"
            : "#65FC6B"
        }
        completedPart={completedPart}
      />
      <p
        style={{
          width: 'fit-content',
          position: "relative",
          margin: '0px 0px 0px 0px',
          top: props.size === "big" ? 35 : 14,
          left: 0,
          fontFamily: "'Helvetica'",
          fontWeight: 400,
          fontSize: props.size === "big" ? 28 : 14,
          lineHeight: "16px",
          color: "#315C57",
          opacity: 0.8,
        }}
      >
        {completedPart > 60
          ? "Nearly Full"
          : completedPart > 30
          ? "Half Full"
          : "Highly Available"}
      </p>
      <p
        style={{
          width: 'fit-content',
          position: "relative",
          margin: '0px 0px 0px 0px',
          left: 240,
          top: props.size === "big" ? 35 : -4,
          fontFamily: "'Helvetica'",
          fontWeight: 400,
          fontSize: props.size === "big" ? 28 : 14,
          lineHeight: "16px",
          color: "#315C57",
        }}
      >
        {completedPart}%
      </p>
    </div>
  );
};

export default ProgressBarMini;

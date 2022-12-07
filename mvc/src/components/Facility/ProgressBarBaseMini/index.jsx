import React from "react";
import "./ProgressBarBaseMini.css";

const ProgressBarBaseMini = (props) => {
    const { bgColor, completedPart, size } = props;

    
    return (
        <div 
            className="ProgressBar-mini"
            style={{
                height: size === "big" ? 20:9,
                width: size === "small" ? 343: "dashboard"? 260:630,
                backgroundColor: '#D9D9D9',
                borderRadius: 10
            }}
        >
            <div className="CompletedPart-mini" 
                style={{
                    borderRadius: "inherit",
                    transition: 'width 1s ease-in-out',
                    height: '100%',
                    width: `${completedPart}%`,
                    backgroundColor: bgColor,
                }}  
            >
            </div>
        </div>
    );
}

export default ProgressBarBaseMini;
import React from "react";
import "./ProgressBarBase.css";

const ProgressBarBase = (props) => {
    const { bgColor, completedPart, size } = props;

    
    return (
        <div 
            className="ProgressBar"
            style={{
                height: size === "small" ? 9:20,
                width: size === "small" ? 343:630,
                backgroundColor: '#D9D9D9',
                borderRadius: 10
            }}
        >
            <div className="CompletedPart" 
                style={{
                    borderRadius: "inherit",
                    transition: 'width 1s ease-in-out',
                    height: '100%',
                    width: `${completedPart}%`,
                    backgroundColor: bgColor,
                }}  
            >
                {/* <span>{'${completedPart}'}</span> */}
            </div>
        </div>
    );
}

export default ProgressBarBase;
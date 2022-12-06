import React, { useState, useEffect} from "react";
import "./ProgressBar.css";
import ProgressBarBase from "../ProgressBarBase/index";

const ProgressBar = (props) => {
    const [completedPart, setCompletedPart] = useState(0);
   
    useEffect(() => {
        
        setCompletedPart(props.status);
    }, [completedPart])


    return (
        <div 
            className="ProgressBarContainer"
            style={{
                width: 'fit-content',
                height: props.size === "small" ? 50:80,

            }}
        >
            <ProgressBarBase 
                size={props.size}
                bgColor={   completedPart > 90 ? '#E25959':
                            completedPart > 60 ? '#FC8965':
                            completedPart > 30 ? '#FCF665':'#65FC6B'
                        }
                completedPart={completedPart} 
            />
            <span
                style={{
                    position: "absolute",
                    top: props.size === "small" ? 15:35,
                    left: 0,
                    fontFamily: "'Helvetica'",
                    fontWeight: 400,
                    fontSize: props.size === "small" ? 14:28,
                    lineHeight: '16px',
                    color: "#315C57",
                    opacity: 0.8,
                }}
            
            >
            {   
                completedPart > 60 ? 'Nearly Full':
                completedPart > 30 ? 'Half Full':'Highly Available'
            }
            </span>
            <span
                style={{
                    position: "absolute",
                    top: props.size === "small" ? 15:35,
                    right: 0,
                    fontFamily: "'Helvetica'",
                    fontWeight: 400,
                    fontSize: props.size === "small" ? 14:28,
                    lineHeight: '16px',
                    color: "#315C57",
                }}
            >
            {completedPart}%
            </span>
        </div>
    );
};

export default ProgressBar;
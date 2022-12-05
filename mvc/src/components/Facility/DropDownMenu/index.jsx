import React, { useState } from "react";
import { iconsDropDownMenu } from "../../../assets/index";

import "./Dropdownmenu.css";

function DropDownMenu(props) {
  const { options, handleChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const doHandleChange = () => handleChange();

  return (
    <div className="DropDownContainer">
      <div className="DropDownHeader" onClick={toggling}>
        {selectedOption}
        <img
          src={isOpen ? iconsDropDownMenu[1].icon : iconsDropDownMenu[0].icon}
          alt="arrowDropDown"
          style={{
            position: "relative",
            left: 40,
          }}
        />
      </div>
      {isOpen && (
        <div className="DropDownListContainer">
          <ul className="DropDownList">
            {options.map((option) => (
              <li
                onClick={() => {
                  onOptionClicked(option);
                  doHandleChange();
                }}
                key={Math.random()}
                style={
                  selectedOption === option
                    ? { backgroundColor: "#D8FFEF" }
                    : {}
                }
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;

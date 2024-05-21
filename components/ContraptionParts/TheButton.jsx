"use client";

import React, { useEffect, useState } from "react"; // Added useState import
import ButtonImgSwap from "../Reusable/ButtonImgSwap";
import { useContraptionContextApp } from "../../contexts/context";

const TheButton = () => {
  const imgPressed = "LaunchButtonPressed.png";
  const imgUnpressed = "LaunchButtonUnpressed.png";
  // const CaseImgClosed = "CoverClosed.png";
  // const CaseImgOpen = "CoverOpen.png";

  // const [Case, setCase] = useState(false);

  // const toggleCase = () => {
  //   setCase(!Case);
  // };
  // const handleCaseOpen = () => {
  //   setCase(true);
  // };

  // const handleCaseClose = () => {
  //   setCase(false);
  // };

  // const caseImg = Case ? CaseImgOpen : CaseImgClosed;

  const {win, winRedSwitches}= useContraptionContextApp();

  const [buttonActivated, setButtonActivated] = useState(false);
  // const ActivateButton = () => {
  //   setButtonActivated(true);
  // };

  useEffect(() => {
    if(win === true){
      setButtonActivated(true)
    }
    else{
      setButtonActivated(false)
    }
  }, [win])

  return (
    <div className="flex justify-center items-center relative">
      <div>
        <ButtonImgSwap
          imgNoPress={imgUnpressed}
          altNoPress=""
          imgPress={imgPressed}
          altPress=""
          classNameButton="flex-none"
          classNameImgNoPress=""
          classNameImgPress="ml-3 mt-3"
        />
      </div>
      {winRedSwitches ? null : <div className="w-full h-full absolute"></div>}
    </div>
  );
};

export default TheButton;

"use client";

import React from "react";
import { StatusCardWrapper } from "./styles";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const StatusCard = (props: any) => {
  const { image = "", numberLabel = "", label = "", bottomText = "" } = props;
  return (
    <StatusCardWrapper>
      <div className="heading">
        <Image src={image} alt="status-img" className="status-icon" />
        <div className="status-card-right-icon">
          <FiArrowRight size={24} />
        </div>
      </div>
      <div className="main-content">
        <h2>{numberLabel}</h2>
        <p>{label}</p>
      </div>
      <div className="bottom-text">
        <p>{bottomText}</p>
      </div>
    </StatusCardWrapper>
  );
};

export default StatusCard;

"use client";

import React from "react";
import SidebarLayout from "../sidebar-layout/layout";
import StatusCard from "@/components/dashboard/statusCard/StatusCard";
import { DashboardWrapper } from "./styles";
import boxImg from "./../../../public/assets/images/available.png";
import redAlert from "./../../../public/assets/images/mingcute_alert-fill.png";
import yellowAlert from "./../../../public/assets/images/emojione-v1_warning.png";
import timer from "./../../../public/assets/images/noto_hourglass-done.png";
import AreaChartContainer from "@/components/dashboard/areaChart/AreaChartContainer";

const items = [
  {
    image: boxImg,
    numberLabel: "12,300",
    label: "Items",
    bottomText: "To Items in the stock",
  },
  {
    image: redAlert,
    numberLabel: "37",
    label: "Items",
    bottomText: "Items below threshold",
  },
  {
    image: yellowAlert,
    numberLabel: "50",
    label: "Items",
    bottomText: "items need restocking",
  },
  {
    image: timer,
    numberLabel: "73",
    label: "Items",
    bottomText: "About to expire",
  },
];

const page = () => {
  return (
    <SidebarLayout>
      <DashboardWrapper>
        <div className="status-cards">
          {items.map((item, index) => (
            <StatusCard {...item} key={`statusCard-${index}`} />
          ))}
        </div>
        <div className="chart-section">
          <AreaChartContainer />
        </div>
      </DashboardWrapper>
    </SidebarLayout>
  );
};

export default page;

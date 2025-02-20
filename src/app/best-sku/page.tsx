"use client";

import React, { useEffect, useState } from "react";
import SidebarLayout from "../sidebar-layout/layout";
import ProductCard from "@/components/productCard/ProductCard";
import { SkuSectionWrapper } from "./style";
import axios from "axios";

const items = [
  {
    image_url:
      "https://i.mscwlns.co/media/misc/pdp/nutrimix-nutrition-powder/chocolate_5vavcx.jpg?tr=w-500,c-at_max",
    name: "NutriMix Nutrition Powder (350g)",
    quantity: "500",
  },

  {
    image_url:
      "https://i.mscwlns.co/media/misc/pdp/multivitamin-gummies-nutrimix-300/Slide-1-Nutrimix_6ik6h1.jpg?tr=w-500,c-at_max",
    name: "Immunity Boosting Kit",
    quantity: "500",
  },
  {
    image_url:
      "https://i.mscwlns.co/media/misc/pdp/multivitamin-gummies/MVG7%2B_WBG_5nli98.jpg?tr=w-500,c-at_max",
    name: "Multivitamin Gummies 2+ (30 Days Pack)",
    quantity: "500",
  },
  {
    image_url:
      "https://i.mscwlns.co/media/misc/pdp/brain-gummies-nutrimix-300/Hero-slide-without-icons_fxxkfl.jpg?tr=w-500,c-at_max",
    name: "Brain Development Kit",
    quantity: "500",
  },
];

const page = () => {
  return (
    <SidebarLayout>
      <SkuSectionWrapper>
        <div className="skus-section">
          {items.map((item, index) => (
            <ProductCard {...{ item }} key={`product-card-${index}`} />
          ))}
        </div>
      </SkuSectionWrapper>
    </SidebarLayout>
  );
};

export default page;

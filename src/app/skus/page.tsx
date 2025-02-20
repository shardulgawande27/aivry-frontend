"use client";

import React from "react";
import SidebarLayout from "../sidebar-layout/layout";
import ProductCard from "@/components/productCard/ProductCard";
import { SkuSectionWrapper } from "./style";

const items = [
  {
    imgUrl:
      "https://i.mscwlns.co/media/misc/pdp/nutrimix-nutrition-powder/chocolate_5vavcx.jpg?tr=w-500,c-at_max",
    skuName: "NutriMix Nutrition Powder (350g)",
    quantity: "500",
  },

  {
    imgUrl:
      "https://i.mscwlns.co/media/misc/pdp/multivitamin-gummies-nutrimix-300/Slide-1-Nutrimix_6ik6h1.jpg?tr=w-500,c-at_max",
    skuName: "Immunity Boosting Kit",
    quantity: "500",
  },
  {
    imgUrl:
      "https://i.mscwlns.co/media/misc/pdp/multivitamin-gummies/MVG7%2B_WBG_5nli98.jpg?tr=w-500,c-at_max",
    skuName: "Multivitamin Gummies 2+ (30 Days Pack)",
    quantity: "500",
  },
  {
    imgUrl:
      "https://i.mscwlns.co/media/misc/pdp/brain-gummies-nutrimix-300/Hero-slide-without-icons_fxxkfl.jpg?tr=w-500,c-at_max",
    skuName: "Brain Development Kit",
    quantity: "500",
  },
  {
    imgUrl:
      "https://i.mscwlns.co/media/misc/pdp/chocolate-spread/Spread_7hnfi6.jpg?tr=w-500,c-at_max",
    skuName: "Chocolate Hazelnut Spread (300g)",
    quantity: "500",
  },
  {
    imgUrl:
      "https://i.mscwlns.co/media/misc/pdp/jam-pack-of-2/20%20%282%29_chn531.png?tr=w-500,c-at_max",
    skuName: "Strawberry Honey Jam - Pack of 2",
    quantity: "500",
  },
  {
    imgUrl:
      "https://i.mscwlns.co/media/misc/pdp/sauce-squeezy-pack-of-2/PDP-Option-1_401r77.jpg?tr=w-500,c-at_max",
    skuName: "Tomato Sauce Squeeze - Pack of 2)",
    quantity: "500",
  },
  {
    imgUrl:
      "https://i.mscwlns.co/media/misc/pdp/calcium-gummies-strawberry/Calcium-Gummies-WBG_garmk7.jpg?tr=w-500,c-at_max",
    skuName: "Calcium Gummies Strawberry (30N)",
    quantity: "500",
  },
];

const page = () => {
  return (
    <SidebarLayout>
      <SkuSectionWrapper>
        <div className="skus-section">
          {items.map((item, index) => (
            <ProductCard {...item} key={`product-card-${index}`} />
          ))}
        </div>
      </SkuSectionWrapper>
    </SidebarLayout>
  );
};

export default page;

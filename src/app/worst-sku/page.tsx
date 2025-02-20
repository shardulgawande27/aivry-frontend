"use client";

import React, { useEffect, useState } from "react";
import SidebarLayout from "../sidebar-layout/layout";
import ProductCard from "@/components/productCard/ProductCard";
import { SkuSectionWrapper } from "./style";
import axios from "axios";

const items = [
  {
    image_url:
      "https://i.mscwlns.co/media/misc/pdp/chocolate-spread/Spread_7hnfi6.jpg?tr=w-500,c-at_max",
    name: "Chocolate Hazelnut Spread (300g)",
    quantity: "500",
  },
  {
    image_url:
      "https://i.mscwlns.co/media/misc/pdp/jam-pack-of-2/20%20%282%29_chn531.png?tr=w-500,c-at_max",
    name: "Strawberry Honey Jam - Pack of 2",
    quantity: "500",
  },
  {
    image_url:
      "https://i.mscwlns.co/media/misc/pdp/sauce-squeezy-pack-of-2/PDP-Option-1_401r77.jpg?tr=w-500,c-at_max",
    name: "Tomato Sauce Squeeze - Pack of 2)",
    quantity: "500",
  },
  {
    image_url:
      "https://i.mscwlns.co/media/misc/pdp/calcium-gummies-strawberry/Calcium-Gummies-WBG_garmk7.jpg?tr=w-500,c-at_max",
    name: "Calcium Gummies Strawberry (30N)",
    quantity: "500",
  },
];

const page = () => {
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    const fetchSkus = async () => {
      try {
        const { data } = await axios.get(
          `https://aivry-backend.vercel.app/api/skus/get-skus`
        );
        console.log("Fetched SKUs:", data);
        setNewItems(data);
      } catch (error) {
        console.error("Error fetching SKUs:", error);
      }
    };

    fetchSkus();
  }, []);

  return (
    <SidebarLayout>
      <SkuSectionWrapper>
        <div className="skus-section">
          {newItems.map((item, index) => (
            <ProductCard {...{ item }} key={`product-card-${index}`} />
          ))}

          {items.map((item, index) => (
            <ProductCard {...{ item }} key={`product-card-${index}`} />
          ))}
        </div>
      </SkuSectionWrapper>
    </SidebarLayout>
  );
};

export default page;

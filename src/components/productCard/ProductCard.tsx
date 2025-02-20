/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ProductCardWrapper } from "./styles";

const ProductCard = (props: any) => {
  const { imgUrl = "", skuName = " ", quantity = "" } = props;
  return (
    <ProductCardWrapper>
      <div className="image-container">
        <img src={imgUrl} alt={skuName} className="product-img" />
      </div>
      <div className="product-details">
        <h3>{skuName}</h3>
        <div className="quantity-section">
          <p>Quantity : </p>
          <p>{quantity}</p>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;

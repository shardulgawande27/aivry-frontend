/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ProductCardWrapper } from "./styles";

const ProductCard = (props: any) => {
  const { item } = props;
  const {
    id = "",
    image_url: imgUrl = "",
    name: skuName = " ",
    quantity = "",
  } = item || {};

  return (
    <ProductCardWrapper href={`/sku/${id}`}>
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

import styled from "styled-components";
import Link from "next/link";
export const ProductCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: #12151d;
  width: 275px;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  padding: 16px;
  cursor: pointer;

  .image-container {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
  }

  .product-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    filter: none;
    opacity: 1;
  }

  .product-details {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    text-align: start;
    gap: 8px;
    margin-top: 16px;
  }

  .quantity-section {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;

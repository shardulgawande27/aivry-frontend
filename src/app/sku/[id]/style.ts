import styled from "styled-components";

export const SkuDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* background: #f8f9fa; */
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .chart-section {
    margin-top: 50px;
    width: 100%;
    height: 250px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 400px;
    border-radius: 12px;
    object-fit: contain;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkuTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SkuText = styled.p`
  font-size: 18px;

  margin-bottom: 8px;
`;

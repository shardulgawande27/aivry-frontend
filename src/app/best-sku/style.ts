import styled from "styled-components";

export const SkuSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .skus-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 32px;
  }
`;

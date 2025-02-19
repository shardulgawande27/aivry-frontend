import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .status-cards {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 24px;
  }

  .chart-section {
    margin-top: 50px;
    width: 100%;
    height: 400px;
  }
`;

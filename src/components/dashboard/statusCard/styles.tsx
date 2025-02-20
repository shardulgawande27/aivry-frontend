import styled from "styled-components";

export const StatusCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #12151d;
  border-radius: 10px;
  gap: 8px;
  flex: 0 1 350px;

  .status-icon {
    width: 40px;
    height: 40px;
  }

  .status-card-right-icon {
    cursor: pointer;
  }

  .heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .main-content {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
`;

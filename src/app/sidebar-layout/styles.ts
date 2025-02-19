import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
`;

export const Sidebar = styled.nav<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? "250px" : "60px")};
  background: #0a0d15;
  color: white;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  padding: ${({ $isOpen }) => ($isOpen ? "20px" : "10px")};
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  align-items: ${({ $isOpen }) => ($isOpen ? "flex-start" : "center")};

  .title {
    margin-bottom: 16px;
  }
`;

export const MainContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #0a0d15;
  width: 98%;
  margin: auto;
  border-radius: 12px;
`;

export const StyledLink = styled(Link)<{ isActive: boolean }>`
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block;
  width: 100%;
  text-align: left;
  background: ${({ isActive }) => (isActive ? "#01AB56" : "transparent")};
  border-radius: 8px;
  &:hover {
    background: #01ab56;
  }
`;

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  top: 15px;
  right: ${({ $isOpen }) => ($isOpen ? "20px" : "50%")};
  transform: ${({ $isOpen }) => ($isOpen ? "none" : "translateX(50%)")};
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
`;

export const Header = styled.header<{ $isOpen: boolean }>`
  background: #0a0d15;
  padding: 15px;
  font-size: 12px;
  font-weight: bold;
  transition: margin-left 0.3s ease-in-out;
  display: flex;
  align-items: center;
  height: 60px;
  margin-bottom: 8px;
  justify-content: space-between;

  .header-content {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .right-container-section {
    display: flex;
    border: 1px solid #a2a1a8;
    border-radius: 6px;
    padding: 6px 12px;
    position: relative;
  }

  .search-bar {
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    font-size: 16px;
  }

  .selected-brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .drop-down-btn {
    all: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .drop-down-section {
    position: absolute;
    height: auto;
    top: 35px;
    left: 0;
    background-color: #0a0d15;
    height: auto;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .drop-down-section ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 12px;
  }

  .drop-down-section h3 {
    cursor: pointer;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2.5px;
  align-items: center;
  border-radius: 353px;
  justify-content: space-between;
  color: white;
  gap: 16px;

  .profile-img {
    object-fit: contain;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    aspect-ratio: 1/1;
    border-radius: 353px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  cursor: pointer;
`;

export const Username = styled.div`
  align-self: flex-start;
  font-size: 12px;
  font-weight: 600;
`;

export const Email = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

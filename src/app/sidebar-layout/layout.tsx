"use client";
import { useCallback, useState } from "react";
import {
  Container,
  Sidebar,
  StyledLink,
  MainContentWrapper,
  ToggleButton,
  Header,
  MainContent,
  ProfileContainer,
  InfoContainer,
  Username,
  Email,
  ChatBtnWrapper,
} from "./styles";
import { FiMenu } from "react-icons/fi";
import { TbArrowBarToLeft } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import profilePic from "./../../../public/assets/images/user.png";
import Image from "next/image";
import useSidebar from "./useSidebar";
import Link from "next/link";
import { MdOutlineMessage } from "react-icons/md";

const items = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "SKUs", link: "/skus" },
  { label: "Create SKU", link: "/create-sku" },
  { label: "Best Performing SKU", link: "/best-sku" },
  { label: "Worst Performing SKU", link: "/worst-sku" },
];

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useSidebar();

  const [isOpen, setIsOpen] = useState(true);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropdown = useCallback(() => {
    setIsDropdown(!isDropdown);
  }, [isDropdown]);

  return (
    <Container>
      <Sidebar $isOpen={isOpen}>
        {isOpen && (
          <>
            <Link href="/dashboard">
              {" "}
              <h2 className="title">Aivry</h2>
            </Link>
            {items.map((item, index) => {
              const $isActive = pathname === item.link;
              return (
                <StyledLink
                  href={item.link}
                  key={`link-${index}`}
                  $isActive={$isActive}
                >
                  {item.label}
                </StyledLink>
              );
            })}
          </>
        )}
        <ToggleButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <TbArrowBarToLeft /> : <FiMenu />}
        </ToggleButton>
      </Sidebar>

      <MainContentWrapper>
        <Header $isOpen={isOpen}>
          <div className="header-title">
            {items.find((item) => item.link === pathname)?.label ? (
              <h1>{items.find((item) => item.link === pathname)?.label}</h1>
            ) : (
              <div />
            )}
          </div>

          <div className="header-content">
            <div className="right-container-section">
              <input type="text" placeholder="search" className="search-bar" />
              <CiSearch size={20} />
            </div>
            <div className="right-container-section">
              <div className="selected-brand">
                <h3>Little Joys</h3>
                <button className="drop-down-btn" onClick={handleDropdown}>
                  <IoIosArrowDown size={20} />
                </button>
              </div>
              {isDropdown && (
                <div className="drop-down-section">
                  <ul>
                    <li>
                      <h3>Man Matter</h3>{" "}
                    </li>
                    <li>
                      {" "}
                      <h3>Be Bodywiser</h3>{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <ProfileContainer>
              <Image
                src={profilePic}
                alt="profile"
                loading="lazy"
                className="profile-img"
              />

              <InfoContainer>
                <Username>Admin</Username>
                <Email>admin@mosaicwellness.in</Email>
              </InfoContainer>
            </ProfileContainer>
          </div>
        </Header>
        <MainContent>{children}</MainContent>
        <ChatBtnWrapper>
          <MdOutlineMessage size={30} />
        </ChatBtnWrapper>
      </MainContentWrapper>
    </Container>
  );
}

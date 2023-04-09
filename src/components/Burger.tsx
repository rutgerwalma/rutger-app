import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

type BurgerProps = {
  isOpened: boolean;
};

export default function Burger() {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => setIsOpened(!isOpened);

  return (
    <>
      <BurgerContainer>
        <LogoBox>
          <StyledNavLink to={`/`}>R.</StyledNavLink>
        </LogoBox>
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
          <Icon isOpened={isOpened}>&nbsp;</Icon>
        </MenuLabel>
      </BurgerContainer>
      {isOpened && (
        <BurgerMenuContainer>
          <StyledNavLink to={`/`}>home.</StyledNavLink>
          <StyledNavLink to={`/about`}>about.</StyledNavLink>
          <StyledNavLink to={`/projects`}>projects.</StyledNavLink>
          <StyledNavLink to={`/cv`}>curriculum vitae.</StyledNavLink>
        </BurgerMenuContainer>
      )}
    </>
  );
}

const StyledNavLink = styled(NavLink)`
  margin: 2rem 0;
  font-size: 2rem;
  &[class*="active"] {
    border-bottom: 2px solid rgba(86, 67, 253, 0.75);
  }
`;

const MenuLabel = styled.label`
  background: linear-gradient(90deg, rgba(255, 48, 0, 0.75) 0%, rgba(86, 67, 253, 0.75) 100%);
  top: 2rem;
  right: 2rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  z-index: 100;
  &:hover {
    box-shadow: 0px 0px 25px 0px rgba(255, 255, 255, 0.2);
  }
  transition: 0.3s;
  text-align: center;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props: BurgerProps) => (props.isOpened ? "transparent" : "#fff")};
  width: 1.5rem;
  height: 2px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #fff;
    width: 1.5rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props: BurgerProps) => (props.isOpened ? "0" : "-0.8rem")};
    transform: ${(props: BurgerProps) => (props.isOpened ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props: BurgerProps) => (props.isOpened ? "0" : "0.8rem")};
    transform: ${(props: BurgerProps) => (props.isOpened ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props: BurgerProps) => (props.isOpened ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props: BurgerProps) => (props.isOpened ? "0" : "1rem")};
  }
`;

const BurgerContainer = styled.div`
  position: fixed;
  display: flex;
  max-width: 100%;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #ffffff;
  position: relative;
  top: 0;
  justify-content: space-between;
`;

const BurgerMenuContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  padding: 6rem 0;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background: rgb(24, 24, 24);
  position: relative;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100%;
  z-index: 99;
`;

const LogoBox = styled.div`
  position: relative;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  z-index: 100;
  margin: 0;
  padding: 0 2rem;
  user-select: none;
  padding: 0 1rem;
  border-radius: 5px;
  border: 1px solid linear-gradient(90deg, rgba(255, 48, 0, 0.75) 0%, rgba(86, 67, 253, 0.75) 100%);
  background: linear-gradient(90deg, rgba(255, 48, 0, 0.75) 0%, rgba(86, 67, 253, 0.75) 100%);
  &:hover {
    box-shadow: 0px 0px 25px 0px rgba(255, 255, 255, 0.2);
  }
  transition: 0.3s;
`;

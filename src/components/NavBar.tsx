import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <MenuBox>
      <LogoBox>
        <StyledNavLink to={`/`}>r_</StyledNavLink>
      </LogoBox>
      <MenuItem>
        <StyledNavLink to={`/about`}>
          <LinkText>about.</LinkText>
        </StyledNavLink>
      </MenuItem>
      <MenuItem>
        <StyledNavLink to={`/projects`}>
          <LinkText>projects.</LinkText>
        </StyledNavLink>
      </MenuItem>
      <MenuItem>
        <StyledNavLink to={`/cv`}>
          <LinkText>curriculum vitae.</LinkText>
        </StyledNavLink>
      </MenuItem>
    </MenuBox>
  );
}

const StyledNavLink = styled(NavLink)`
  &[class*="active"] {
    border-bottom: 2px solid rgba(86, 67, 253, 0.75);
  }
`;

const MenuBox = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #ffffff;
  position: relative;
  top: 0;
`;

const MenuItem = styled.div`
  position: relative;
  min-width: 100px;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  user-select: none;
  padding: 0 2rem;
  cursor: pointer;
  transition: 0.2s;
`;

const LogoBox = styled.div`
  position: relative;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
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

const LinkText = styled.span`
  position: relative;
  padding: 0.1rem 2rem;
  text-decoration: none;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, rgba(255, 48, 0, 0.75) 0%, rgba(86, 67, 253, 0.75) 100%);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

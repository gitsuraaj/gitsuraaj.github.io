import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background: #1e3a82;
  /* ${({ scrollNav }) => (scrollNav ? "#1E3A82" : "transparent")}; */
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  overflow: hidden;
  opacity: ${({ scrollNav }) => (scrollNav ? 1 : 0)};

  box-shadow: -1px 7px 9px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 7px 9px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 7px 9px 1px rgba(0, 0, 0, 0.2);

  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled.img`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 1.1rem;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  :hover {
    color: #000;
    background-color: #224191;
  }

  &.active {
    border-bottom: 3px solid #ee7e05;
    margin-top: -3px;
    font-weight: bold;
  }
`;

export const NavBtn = styled.a`
  cursor: pointer;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    width: 30px;
    padding: 15px;

    :hover {
      background-color: #224191;
    }
  }
`;

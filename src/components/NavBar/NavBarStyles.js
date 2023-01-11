import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavContainer = styled.nav`
  align-items: center;
  background-color: white;
  display: flex;
  height: 4.8rem;
  justify-content: space-between;
  left: 0;
  max-width: 120rem;
  margin: 0 6.2rem;
  position: fixed;
  right: 0;
  z-index: 10;
`;

export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
`;

export const NavLink = styled(Link)`
  border-bottom: 2px solid transparent;
  color: #1d1f22;
  cursor: pointer;
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  text-decoration: none;
  padding: 1rem 1rem 2rem 1rem;
  &:active {
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;
  }
  &:hover {
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;
  }
  &:focus {
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;

`;

export const CurrencyDropdown = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  font-family: "Raleway";
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 1rem;
  padding: 0;
`;

export const ArrowIcon = styled.img`
  margin-left: 0.5rem;
  margin-top: 0.8rem;
  position: relative;
`;

export const CurrencyModal = styled.div`
  background-color: white;
  box-shadow: 1px 1px 25px 3px rgba(150, 150, 150, 0.1);
  font-size: 1rem;
  font-family: "Raleway";
  height: fit-content;
  margin-top: 0.5rem;
  position: fixed;
  right: 6.2rem;
  top: 3.5rem;
  z-index: 5;
`;

export const CurrencyModalContent = styled.div`
  font-size: 1rem;
  font-family: "Raleway";
  font-weight: 500;
  line-height: 1.8rem;
  padding: 1rem 1.5rem 0.5rem 1rem;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

export const CartDropdown = styled.button`
  background-color: white;
  border: none;
  margin-right: 1rem;
  padding: 0;
`;

export const Badge = styled.span`
  background: black;
  border-radius: 50%;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.2rem;
  margin-top: -10px;
  margin-left: -10px;
  min-width: 1.2rem;
  min-height: 1.2rem;
  position: absolute;
  text-align: center;
`;

export const ModalsContainer = styled.div`
  display: flex;
`;

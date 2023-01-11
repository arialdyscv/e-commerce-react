import { Link } from "react-router-dom";
import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(57, 55, 72, 0.22);
  cursor: pointer;
  height: 100%;
  left: 0;
  position: fixed;
  top: 5rem;
  width: 100%;
  z-index: 50;
`;

export const CartModalContainer = styled.div`
  background: white;
  font-size: 1rem;
  font-weight: 700;
  font-family: Raleway;
  max-height: 42rem;
  max-width: 25rem;
  position: fixed;
  padding: 2rem 1rem;
  right: 2.5rem;
  top: 5rem;
  text-align: left;
  z-index: 20;
`;

export const ModalTitle = styled.div`
  font-size: 1rem;
  font-family: "Raleway";
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const ItemCount = styled.span`
  font-weight: 500;
`;

export const EmptyModal = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-family: "Raleway";
  font-weight: 300;
  margin: 2rem;
`;

export const ModalProductList = styled.div`
  overflow-y: auto;
  max-height: 28rem;
`;
export const ModalProductContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const ProductTitle = styled.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 2rem;
  max-width: 10rem;
`;

export const ModalPrice = styled.div`
  line-height: 1.5rem;
  font-weight: 500;
  font-size: 1rem;
`;

export const AttrName = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
  margin: 1rem 0;
`;

export const AttrContainer = styled.div`
  display: inline-block;
  margin-left: 0.2rem;
`;
export const ColorSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  height: 1rem;
  margin-right: 0.5rem;
  position: relative;
  width: 1rem;
  ${({ color }) => {
    if (color) {
      return `
      background-color:${color};
    `;
    }
  }}

  ${({ selected }) => {
    if (selected) {
      return `
   &:before{
        content: '';
        border:2px solid #5ECE7B;
        position:absolute;
        background:transparent;
        left:-3px;
        right:-3px;
        top:-3px;
        bottom:-3px;  
      }
   
    `;
    }
  }}
`;

export const TextSpan = styled.span`
  border: 1px solid #1d1f22;
  cursor: pointer;
  padding: 0.4rem;
  font-weight: 400;
  margin-right: 0.5rem;
  ${({ selected }) => {
    if (selected) {
      return `
  color:white;
  background-color:#1d1f22;
  `;
    }
  }}
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.5rem;
`;
export const ModalBtn = styled.button`
  background: transparent;
  border: 1px solid #1d1f22;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  &:hover {
    background: #1d1f22;
    color: white;
  }
`;

export const ModalQuantity = styled.h4`
  font-size: 1rem;
  font-weight: 500;
`;

export const ModalImgContainer = styled.div`
  align-self: center;
`;

export const ModalImg = styled.img`
  max-width: 7.5rem;
  max-height: 12rem;
`;

export const ModalTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500
  font-family: Roboto;
  margin: 1.5rem 0;
`;

export const ModalAmount = styled.span`
  font-family: "Raleway";
  font-weight: 700;
  font-size: 1rem;
`;

export const CartModalButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: space-between;
  font-family: Raleway;
  font-weight: 600;
  font-size: 1rem;
`;

export const ViewBag = styled(Link)`
  text-decoration: none;
  color: #1d1f22;
  background: white;
  border: solid 1px;
  cursor: pointer;
  padding: 0.8rem 2.2rem;
  &:hover {
    background: #1d1f22;
    color: white;
  }
`;

export const CheckOut = styled(Link)`
  text-decoration: none;
  background: #5ece7b;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.8rem 2.2rem;
  &:hover {
    background: #69e98b;
  }
`;

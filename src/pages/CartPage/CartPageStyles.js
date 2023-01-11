import styled from "styled-components";

export const CartTitle = styled.h1`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 55px;
  width: 100%;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e5e5e5;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  font-family: Raleway;
`;

export const Brand = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
`;

export const Name = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`;

export const Price = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const SpanText = styled.span`
  border: 1px solid #1d1f22;
  cursor: pointer;
  padding: 0.8rem 1.7rem;
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

export const SpanColor = styled.span`
  cursor: pointer;
  display: inline-block;
  height: 2rem;
  margin-right: 0.5rem;
  position: relative;
  width: 2rem;
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

export const Splitter = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CartBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  align-items: center;
`;
export const CartBtn = styled.button`
  background: transparent;
  border: 1px solid #1d1f22;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  &:hover {
    background: #1d1f22;
    color: white;
  }
`;

export const ProductQty = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const SliderContainer = styled.div`
  margin-top: 1.5rem;
  align-self: center;
  width: 13rem;
`;

export const CartImage = styled.img`
  max-width: 12.5rem;
  max-height: 18rem;
`;

export const RightSlide = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  padding-bottom: 0.2rem;
  position: relative;
  left: 8rem;
  bottom: 1rem;
  img {
    filter: invert(100%);
    transform: rotate(-90deg);
  }
`;
export const LeftSlide = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  padding-bottom: 0.2rem;
  position: relative;
  left: 8.5rem;
  bottom: 1rem;
  img {
    filter: invert(100%);
    transform: rotate(90deg);
  }
`;
export const TotalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const TotalText = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 0.5rem;
`;

export const OrderBtn = styled.button`
  background-color: #5ece7b;
  border: none;
  color: white;
  padding: 0.8rem 7rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #69e98b;
  }
`;
export const ClearBtn = styled.button`
  background: white;
  border: 1px solid;
  float: right;
  padding: 0.8rem;
  margin-right: 3rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: red;
    color: white;
  }
`;

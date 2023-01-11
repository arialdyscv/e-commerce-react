import styled from "styled-components";

export const ProductCard = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  max-width: 25rem;
  min-width: fit-content;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    button {
      display: ${({ Stock }) => (Stock ? "block" : "none")};
    }
  }
  div {
    filter: ${({ Stock }) => (Stock ? "none" : "opacity(0.4)")};
  }
`;

export const ProductImg = styled.div`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  object-fit: fill;
  background-size: contain;
  width: auto;
  height: 20rem;
`;

export const OutOfStock = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  position: relative;
  bottom: 10rem;
  color: #8d8f9a;
  z-index: -5;
`;

export const CartButton = styled.button`
  background-color: #5ece7b;
  border: none;
  border-radius: 50%;
  display: none;
  cursor: pointer;
  float: right;
  width: 3.5rem;
  height: 3.5rem;
  position: relative;
  bottom: 2rem;
  right: 1rem;
`;

export const ProductCardFooter = styled.div`
  color: #1d1f22;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 1.5rem;
  line-height: 1.8rem;
  break-word: break-word;
  span {
    font-weight: 500;
  }
`;

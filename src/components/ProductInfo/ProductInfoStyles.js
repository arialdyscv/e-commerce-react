import styled from "styled-components";

/*Product Image Styles*/

export const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: 1/-1;
  padding: 0 1rem;
`;
export const Thumbnail = styled.img`
  display: block;
  max-width: 5rem;
  max-height: 5rem;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export const MainImageContainer = styled.div`
  margin: 0;
`;

export const MainImage = styled.img`
  max-width: 38rem;
  max-height: 45rem;
`;

/*Product Info  */

export const InfoContainer = styled.div`
  width: 20rem;
`;

export const ProductBrand = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
`;

export const ProductName = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin-top: 1rem;
`;

/*Product Attributes */

export const AttributesContainer = styled.div`
  margin-top: 2rem;
`;

export const AttrName = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
`;

export const Attributes = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AttrLabel = styled.label`
  margin: 0;
  padding: 0;
`;

export const SpanText = styled.span`
  border: 1px solid #1d1f22;
  padding: 0.8rem 1.7rem;
  font-weight: 400;
`;
export const SpanColor = styled.span`
  background-color: ${({ color }) => `${color}`};
  width: 2rem;
  height: 2rem;
  border: 1px solid #1d1f22;
  display: inline-block;
  cursor: pointer;
`;

export const AttrValue = styled.input`
  &:checked + ${AttrLabel} ${SpanText} {
    color: white;
    background: #1d1f22;
  }
  &:checked + ${AttrLabel} ${SpanColor} {
    border: 2px solid #5ece7b;
  }

  display: none;
`;

/*Price || Button || Description */

export const PriceSection = styled.div`
  margin-top: 2rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const Price = styled.div`
  font-family: Roboto;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  text-color: #1d1f22;
  margin-top: 2rem;
`;

export const ProductPrice = styled.div`
  padding-top: 1rem;
  font-family: Raleway;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;

export const AddButton = styled.button`
  background-color: #5ece7b;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 1rem 6rem;
  margin-top: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #69e98b;
  }
  &:disabled {
    background-color: #8d8f9a;
    cursor: default;
  }
`;

export const ProductDesc = styled.div`
  margin-top: 2.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  width: 20rem;
  max-height: 20rem;
  overflow: auto;
  font-family: "Roboto", sans-serif;
  text-align: left;
  word-break: normal;
`;

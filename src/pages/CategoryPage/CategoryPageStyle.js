import styled from "styled-components";

export const CategoriesContainer = styled.div`
  max-width: 120rem;
  margin: 0 6.2rem;
  max-width: 120rem;
  position: absolute;
  padding-top: 5rem;
  left: 0;
  right: 0;
`;

export const CategoriesTitle = styled.div`
  font-family: Raleway;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 4rem;
  margin-top: 2.5rem;
`;

export const CategoriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
`;

export const Loading = styled.div`
  align-items: center;
  display: flex;
  grid-column: 2/3;
  justify-content: center;
`;

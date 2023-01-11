import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5rem;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;
export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  aspect-ratio: 3;
`;
export const Content = styled.img`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
export const Left = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 1.5rem;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  height: 3rem;
  left: 25rem;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  width: 3rem;
  z-index: 20;
`;
export const Right = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 1.5rem;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  height: 3rem;
  position: absolute;
  right: 25rem;
  transform: translateY(-50%);
  top: 50%;
  width: 3rem;
  z-index: 20;
`;

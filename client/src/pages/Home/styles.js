import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 868px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80vw;
  }
`;

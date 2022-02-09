import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 2rem;
  height: 200px;
  align-items: center;
  border: 1px solid #47453f;
  border-radius: 0.5rem;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 1rem;
  background-color: rgba(171, 139, 179, 0.2);
  margin-top: 1rem;

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1rem;
  }

  div {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

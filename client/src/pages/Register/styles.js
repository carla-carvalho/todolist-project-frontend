import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 2rem;
  font-weight: 500;
`;

export const Form = styled.form`
  background-color: #897eb3;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;

  input {
    border-radius: 1rem;
    border: solid 1px;
    border-color: white;
  }

  select {
    text-align: center;
    border-radius: 1rem;
  }
`;

export const Concluida = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 0;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background-color: white;
    border: none;
    border-radius: 1rem;
    padding: 0.6rem 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: #b1b1b173;
    }
  }
`;

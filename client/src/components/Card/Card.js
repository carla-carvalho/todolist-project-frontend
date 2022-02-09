import React, { useEffect, useState } from "react";
import { Container, ButtonContainer } from "./styles";
import {
  MdCropSquare,
  MdCreate,
  MdOutlineDeleteForever,
  MdOutlineCheckBox,
} from "react-icons/md";
import { api } from "../../api/api";

export const Card = ({
  taskName,
  handleCheck,
  check,
  taskId,
  description,
  handleDelete,
  priority,
}) => {
  const [checkCard, setCheckCard] = useState(false);
  const onSubmit = () => {
    api
      .put(`/${taskId}`, {
        concluido: checkCard,
      })
      .then((res) => console.log(res));
  };

  useEffect(() => {
    setCheckCard(!check);
  }, [checkCard]);

  console.log(check);
  return (
    <Container>
      <div>
        <h1>{taskName}</h1>
      </div>
      <h2>{description}</h2>
      <ButtonContainer>
        <button onClick={() => onSubmit(taskId)} size={20}>
          {check ? <MdOutlineCheckBox /> : <MdCropSquare />}
        </button>

        <MdCreate />
        <MdOutlineDeleteForever onClick={() => handleDelete(taskId)} />
      </ButtonContainer>
      <p>Prioridade:</p>
      <p>{priority}</p>
    </Container>
  );
};

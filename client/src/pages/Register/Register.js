import React, { useState } from "react";
import { Container, Title, Form, Concluida, Button } from "./styles";
import axios from "axios";
import { api } from "../../api/api";

export default function Register() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [check, setCheck] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleChangeCheck = (e) => {
    setCheck(e.target.checked);
  };

  function submit(e) {
    e.preventDefault();
    api
      .post("/add", {
        nome: name,
        descricao: description,
        prioridade: priority,
        concluido: check,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Title>Nova tarefa</Title>
      <Form onSubmit={submit}>
        <label>Nome:</label>
        <input onChange={handleChangeName} type="text" required />
        <label>Descrição:</label>
        <input onChange={handleChangeDescription} id="descricao" type="text" />
        <label>Prioridade:</label>
        <select onChange={handleChangePriority} name="Prioridade">
          <option value="baixo">Baixa</option>
          <option value="média" selected>
            Média
          </option>
          <option value="alta">Alta</option>
        </select>
        <Concluida>
          <input onChange={handleChangeCheck} type="checkbox" />
          <label>Concluída</label>
        </Concluida>
        <Button>
          <input type="submit" value="Cadastrar" />
        </Button>
      </Form>
    </Container>
  );
}

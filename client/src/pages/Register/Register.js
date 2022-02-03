import React from "react";
import { Container, Title, Form, Concluida, Button } from "./styles";

export default function Register() {

    return (
        <Container>
            <Title>Criar uma nova tarefa</Title>
            <Form>
                <label>Nome:</label>
                <input type ='text' required />
                <label>Descrição:</label>
                <input type ='text'/>
                <label>Prioridade:</label>
                <select name="Prioridade" >
                    <option value="valor1">Baixa</option>
                    <option value="valor2" selected>Média</option>
                    <option value="valor3">Alta</option>
                    </select>
                    <Concluida>
                    <input type="checkbox"/>
                <label>Concluída</label>
                </Concluida>
                <Button>
                <input type="submit" value="Cadastrar"/>
                </Button>
            </Form>
        </Container>
    )
}
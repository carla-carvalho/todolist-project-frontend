import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { Container } from "./styles";
import { Card } from "../../components/Card/Card";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [checkCard, setCheckCard] = useState(false);

  const handleCheck = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, check: !task.check };
      }
      return task;
    });

    console.log(newTask);
  };

  const handleDelete = (taskId) => {
    console.log(taskId);
    api.delete(`/${taskId}`).then(() => {
      const newTask = tasks.filter((task) => task.id !== taskId);
      setTasks(newTask);
    });
  };

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {tasks.map((task) => (
        <Card
          handleDelete={handleDelete}
          key={task._id}
          check={task.concluido}
          handleCheck={handleCheck}
          taskName={task.nome}
          taskId={task._id}
          description={task.descricao}
          priority={task.prioridade}
        />
      ))}
    </Container>
  );
}

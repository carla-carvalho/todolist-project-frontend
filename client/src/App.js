import React, { useState, useEffect } from "react";
import "./App.css";
import { api } from "./api/api";
import Home from "./pages/Home/Home";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return null;
}

export default App;

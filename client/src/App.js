import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { api } from './api/api';


function App() {
  
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    api.get("/tasks")
    .then((response)=>{
    setTasks(response.data)
    }).catch(err => console.log(err))
  }, [])

  console.log(tasks);
  return (
    <h1>olá</h1>
  );
}

export default App;

import React from "react";
import logo from "./todologo.png";
import { Container, Logo, Search, List } from "./Navbar/styles";
import { FaClipboardList } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";


export default function Navbar(){
    return(
        <Container>
           <Logo>
               <a href='/'>
                <img src={logo} alt="Todo"/>
                </a>
           </Logo>

           <Search>
               <input  type="text" id="txtBusca" placeholder="Buscar Tarefa"/>
           </Search>
           <List>
               
                   <a href="/List">
                       <FaClipboardList/>
                       <span>Lista de Tarefas</span>
                        <li>Ver todas</li>
                        <li>Ver concluídas</li>
                   </a>
                   
                   
                   <a href="/Register">
                       <MdAddCircleOutline/>
                       <span>Adicionar tarefa</span>
                       </a>
            
           </List>
        </Container>
    )
}
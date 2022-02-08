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
          
        

                    <FaClipboardList/>
                    <li>Lista de Tarefas
                    <ul>
                    <a href="/List">   <li>Ver todas</li>  </a>
               
                    <a href="/concluidas">   <li> Ver concluídas</li></a>
                        </ul> 
                    </li>
                  
                   
                   
                   <a href="/Register">
                       <MdAddCircleOutline/>
                       <li>Adicionar tarefa</li>
                       </a>
                 
           </List>
        </Container>
    )
}
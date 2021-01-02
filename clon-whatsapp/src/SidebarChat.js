import React, { useState, useEffect } from 'react';
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';

function SidebarChat({ addNewChat }) {
  console.log(addNewChat)
  const [codigo, actualizarCodigo] = useState("");
  
  useEffect(() => {
    actualizarCodigo(Math.floor(Math.random() * 5000 ))
  }, [])

  const createChat = () => {
    const roomName = prompt("Nombra a la nueva sala");

    if(roomName) {
      console.log("HALOOO")
    }
  }



  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src = { `https://avatars.dicebear.com/api/avataaars/:${codigo}.svg` }/>

      <div className="sidebarChat__info">
        <h2>Juan Manuel</h2>
        <p>Hola Feliz año. Como la pas...</p>
      </div>
      
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chay</h2>
    </div>
  )
}

export default SidebarChat;

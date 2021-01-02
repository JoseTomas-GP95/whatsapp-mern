import React, { useState, useEffect } from 'react';
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';

function SidebarChat() {
  const [codigo, actualizarCodigo] = useState("");
  
  useEffect(() => {
    actualizarCodigo(Math.floor(Math.random() * 5000 ))
  }, [])

  return (
    <div className="sidebarChat">
      <Avatar src = { `https://avatars.dicebear.com/api/avataaars/:${codigo}.svg` }/>

      <div className="sidebarChat__info">
        <h2>Juan Manuel</h2>
        <p>Hola Feliz año. Como la pas...</p>
      </div>
      

    </div>
  )
}

export default SidebarChat;

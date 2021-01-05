import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
function SidebarChat({ id, name, addNewChat }) {

  const [codigo, actualizarCodigo] = useState("");

  useEffect(() => {
    actualizarCodigo(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Nombra a la nueva sala");
    // Si tengo un nombre nuevo le pongo a la db a la coleccion tal, en el name lo que ingresé
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/:${codigo}.svg`}
        />

        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Hola Feliz año. Como la pas...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chay</h2>
    </div>
  );
}

export default SidebarChat;

import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";

function Chat() {
  const [codigo, actualizarCodigo] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    actualizarCodigo(Math.floor(Math.random() * 5000));
  }, []);

  // Funcion que envia mensaje
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Tu enviaste", input)

    // Limpiar el input
    setInput("");
  };


  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/:${codigo}.svg`}
        />

        <div className="chat__headerInfo">
          <h3>Manuel Jose</h3>
          <p>en linea</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Tomás Didimo</span>Maria abajame el arroz
          <span className="chat__timestamp">09:00am</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Tomás Didimo</span>
          Porfa que se va a quemar 🔥🔥🔥
          <span className="chat__timestamp">09:05am</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={ input }
            type="text"
            name = "prueba"
            onChange={ (e) => setInput(e.target.value) }
            placeholder="Escriba un mensaje"
          />
          <button onClick = { sendMessage } type = "submit" >Enviar Mensaje</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;

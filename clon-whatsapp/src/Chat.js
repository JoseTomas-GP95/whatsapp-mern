import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import "./Chat.css";

function Chat() {
  const [codigo, actualizarCodigo] = useState("");

  useEffect(() => {
    actualizarCodigo(Math.floor(Math.random() * 5000));
  }, []);

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
        <p className="chat__message">
          <span className="chat__name">Tomás Didimo</span>Maria abajame el arroz
        </p>
        <p className="chat__message">
          <span className="chat__name">Tomás Didimo</span>
          Porfa que se va a quemar 🔥🔥🔥
        </p>
      </div>

      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
// 1:38:36
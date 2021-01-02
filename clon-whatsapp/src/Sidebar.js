import React from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";

import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src = "https://avatars.dicebear.com/api/avataaars/e.svg"/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Busca o Inicia un Chat   📩" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;

// Me quede en una hora: 
// https://www.youtube.com/watch?v=pUxrDcITyjg

// Firebase
// https://console.firebase.google.com/project/whats-app-clone-76341/settings/general/web:MmM1ZThjN2YtYWY4OS00YWEwLTk4YzgtMjRiYjU0M2U3MDlk?hl=es

// Clever Programmer VIM
// https://github.com/CleverProgrammer/vim-instant-markdown
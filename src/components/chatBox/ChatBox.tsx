import { Avatar, Button, IconButton, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { UserDetail } from "../userDetail";
import { chatRoomStyles } from "./styles";

export const ChatBox = () => {
  const classes = chatRoomStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.userData}>
        <UserDetail />
      </Paper>
      <Paper className={classes.chatBox}></Paper>
      <Paper className={classes.sendMessage}>
        <IconButton className={classes.button} style={{ marginLeft: "0.2em" }}>
          <AddIcon />
        </IconButton>
        <input className={classes.inputField} placeholder="Search" />
        <IconButton className={classes.button} style={{ marginRight: "0.2em" }}>
          <AddIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

import { IconButton, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
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
      <Paper className={classes.chatBox}>
        <div style={{ width: "100%" }}>
          <Paper className={classes.messageBox} style={{ float: "left" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            recusandae dsghdvsghgs
          </Paper>
        </div>
        <div>
          <Paper className={classes.messageBox} style={{ float: "right" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            recusandae
          </Paper>
        </div>
      </Paper>
      <Paper className={classes.sendMessage}>
        <IconButton className={classes.button} style={{ marginLeft: "0.2em" }}>
          <AddIcon />
        </IconButton>
        <input className={classes.inputField} placeholder="Search" />
        <IconButton className={classes.button} style={{ marginRight: "0.2em" }}>
          <SendRoundedIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

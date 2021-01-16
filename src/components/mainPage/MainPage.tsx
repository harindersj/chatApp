import { Paper } from "@material-ui/core";
import React from "react";
import { ChatRoom } from "../chatRoom/ChatRoom";
import { UserDetail } from "../userDetail";
import { MainPageStyles } from "./styles";

export const MainPage = () => {
  const classes = MainPageStyles();
  return (
    <Paper className={classes.root}>
      <Paper className={classes.leftBar}>
        <UserDetail />
        <ChatRoom />
      </Paper>
      <Paper className={classes.rightBar}></Paper>
    </Paper>
  );
};

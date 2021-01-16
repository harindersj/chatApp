import React from "react";
import { chatRoomStyles } from "./styles";

export const ChatBox = () => {
  const classes = chatRoomStyles();
  return <div className={classes.root}></div>;
};

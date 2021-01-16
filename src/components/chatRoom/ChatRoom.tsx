import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { chatRoomStyles } from "./styles";
import MailIcon from "@material-ui/icons/Mail";
import { Avatar, Badge, Button } from "@material-ui/core";
export const ChatRoom = () => {
  const userdata = new Array(25).fill("h");
  const classes = chatRoomStyles();
  return (
    <>
      <div className={classes.searchBar}>
        <SearchIcon />
        <input className={classes.inputField} placeholder="Search" />
      </div>
      <div className={classes.root}>
        <div className={classes.chatList}>
          {userdata.map((value, index) => {
            return (
              <Button variant="contained" className={classes.singleChat}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Avatar style={{ background: "orange" }} />
                  <label style={{ padding: "0.3em" }}>Name</label>
                </div>
                <Badge
                  badgeContent={4}
                  color="error"
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                ></Badge>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

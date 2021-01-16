import { Avatar } from "@material-ui/core";
import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { userDetailStyles } from "./styles/userDetailsStyles";
export const UserDetail = () => {
  const classes = userDetailStyles();
  return (
    <div className={classes.root}>
      <div className={classes.userDetail}>
          <Avatar className={classes.avatarStyle} />
        
        <div className={classes.userName}>
          <label>Name</label>
          <label>Active</label>
        </div>
      </div>
      <div className={classes.setting}>
        <SettingsIcon />
      </div>
    </div>
  );
};

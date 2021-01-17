import { Avatar, ClickAwayListener, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { userDetailStyles } from "./styles/userDetailsStyles";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { AddUserDialog } from "./AddUserDialog";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@material-ui/core";
export const UserDetail = () => {
  const classes = userDetailStyles();
  const [showMenu, setShowMenu] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  return (
    <div className={classes.root}>
      <div className={classes.userDetail}>
        <Avatar className={classes.avatarStyle} />

        <div className={classes.userName}>
          <label className={classes.label}>Name</label>
        </div>
      </div>
      <div className={classes.setting}>
        <ClickAwayListener onClickAway={() => setShowMenu(false)}>
          <Tooltip
            placement="right-start"
            open={showMenu}
            interactive
            // style={{ marginLeft: "-60px" }}
            disableFocusListener
            disableHoverListener
            title={
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Add User"
                    onClick={() => setShowAddDialog(true)}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
            }
          >
            <IconButton onClick={() => setShowMenu(!showMenu)}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </ClickAwayListener>
      </div>
      {showAddDialog && <AddUserDialog />}
    </div>
  );
};

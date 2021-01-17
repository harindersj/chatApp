import { Avatar, ClickAwayListener, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { userChatStyles } from "./styles/userChatStyles";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@material-ui/core";
export const UserChatDetail = () => {
  const classes = userChatStyles();
  const [showMenu, setShowMenu] = useState(false);
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
            disableTouchListener
            title={
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
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
    </div>
  );
};

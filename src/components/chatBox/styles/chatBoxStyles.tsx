import { makeStyles } from "@material-ui/core";

export const chatRoomStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "96%",
    padding: "0.5em",
    overflowY: "scroll !important" as "scroll"
  }
}));

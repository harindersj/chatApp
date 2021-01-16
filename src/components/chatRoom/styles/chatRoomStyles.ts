import { makeStyles } from "@material-ui/core";
import { FormatAlignJustifyTwoTone } from "@material-ui/icons";

export const chatRoomStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "96%",
    padding: "0.5em",
    overflowY: "scroll !important" as "scroll"
  },
  searchBar: {
    width: "90%",
    display: "flex",
    position: "sticky",
    margin: "0.5em auto",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(229, 230, 231, 0.75)",
    padding: "0.5rem ",
    borderRadius: "20px",
    boxShadow: theme.shadows[1]
    // margin: "0.5rem"
  },
  inputField: {
    height: "60%",
    width: "70%",
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "1em"
  },
  chatList: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  singleChat: {
    margin: "0.5em 0",
    height: "40%",
    padding: "0 0.9em",
    display: "flex",
    justifyContent: "space-between"
  }
}));

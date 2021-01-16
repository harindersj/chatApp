import { makeStyles } from "@material-ui/core";

export const chatRoomStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  userData: {
    width: "100%",
    margin: "auto",
    height: "10%"
  },
  chatBox: {
    width: "100%",
    height: "78%",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column"
  },
  messageBox: {
    width: "200px",
    height: "auto",
    margin: "10px",
    background: "lightgray",
    textJustify: "inner-word"
  },
  sendMessage: {
    margin: "auto",
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  },
  button: {
    background: "lightgray",
    borderRadius: "60px",
    width: "1.6em",
    height: "1.6em",
    margin: "auto",
    boxShadow: theme.shadows[2]
  },
  inputField: {
    height: "80%",
    width: "100%",
    margin: "auto 0.3em",
    border: "none",
    padding: "0 0.6em",
    background: "lightgray",
    outline: "none",
    borderRadius: "50px",
    fontSize: "1em",
    boxShadow: theme.shadows[1]
  }
}));

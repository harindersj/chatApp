import { makeStyles } from "@material-ui/core";

export const MainPageStyles = makeStyles((theme) => ({
  root: {
    width: "90vw",
    height: "90vh",
    display: "flex",
    background: "whitesmoke",
    overFlow: "hidden"
  },
  leftBar: {
    width: "28%",
    height: "96%",
    margin: "1%",
    display: "flex",
    flexDirection: "column",
    overFlow: "scroll"
  },
  rightBar: {
    width: "68%",
    margin: "1%",
    display: "flex",
    flexDirection: "column"
  }
}));

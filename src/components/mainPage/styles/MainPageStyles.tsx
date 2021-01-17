import { makeStyles, Theme } from "@material-ui/core";

export const MainPageStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "90vw",
    height: "95vh",
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
    width: "70%",
    margin: "1%",
    display: "flex",
    flexDirection: "column"
  }
}));

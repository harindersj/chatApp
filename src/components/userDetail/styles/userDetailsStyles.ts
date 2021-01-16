import { makeStyles } from "@material-ui/core";
import { FormatAlignJustifyTwoTone } from "@material-ui/icons";

export const userDetailStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  avatarStyle: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    background: "orange",
    boxShadow: theme.shadows[2]
  },
  userDetail: {
    display: "flex"
  },
  userName: {
    margin: "0em 1em",
    padding: "0.5em 0em",
    display: "flex",
    flexDirection: "column"
  },
  setting: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

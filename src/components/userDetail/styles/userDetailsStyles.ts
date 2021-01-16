import { makeStyles } from "@material-ui/core";
import { FormatAlignJustifyTwoTone } from "@material-ui/icons";

export const userDetailStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0em 0.4em",
    paddingRight: "1em"
  },
  avatarStyle: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    background: "orange",
    boxShadow: theme.shadows[2]
  },
  userDetail: {
    display: "flex",
    padding: "0.3em 0",
    alignItems: "center",
    justifyContent: "center"
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

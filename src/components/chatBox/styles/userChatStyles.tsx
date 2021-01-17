import { makeStyles, Theme } from "@material-ui/core";

export const userChatStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.3em 0.4em",
    paddingRight: "1em"
  },
  avatarStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    background: "orange",
    boxShadow: theme.shadows[2]
  },
  label: {
    fontSize: "0.8em",
    paddingTop: "0.2em"
  },
  userDetail: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  userName: {
    margin: "0em 1em",
    display: "flex",
    flexDirection: "column"
  },
  setting: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

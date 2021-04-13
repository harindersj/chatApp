import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { io } from "socket.io-client";
// import "./ui.css";
const ENDPOINT = "http://127.0.0.1:4001";
interface loginStatus {
  username: string;
  login?: boolean;
}
const SendMessage = () => {
  const [state, setstate] = useState("");
  const [login, setlogin] = useState<loginStatus>({
    username: "",
    login: false,
  });
  const [id, setid] = useState("");
  const [user, setuser] = useState("");
  const [message, setmessage] = useState<any[]>([]);
  const socket = io(ENDPOINT);
  const addEventListener = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    socket.emit("message", { message: `${id}-${state}`, id: login.username });
    setstate("");
  };

  React.useEffect(() => {
    socket.on(login.username, (messages: any) => {
      console.log("message recieved", messages);
      setmessage((message) => [...message, messages]);
      setuser(messages.id);
    });
  }, [login.username]);
  const authuser = () => {
    // socket.emit(login.username, { message: ${login.username}-${state}, id: login.username })
    setlogin({ login: true, username: login.username });
  };
  const userData = ["user1", "user2", "user3", "user4"];
  console.log("state value ==== ", message);
  return (
    <>
      {!login.login ? (
        <div>
          <TextField
            value={login.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setlogin({ username: e.target.value });
            }}
          />
          <Button onClick={authuser}>Login</Button>
        </div>
      ) : (
        <div id="container" className="d-flex flex-row">
          {/* <div className="bg-secondary d-flex flex-column w-25">
{userData.map((value, index) => {
return <Button variant="contained" color="primary" onClick={() => setid(value)} style={{ margin: "4px" }} >
{value}
</Button>
})}
</div> */}
          <div id="chatSection" className="bg-secondary">
            <div className="chat-window bg-light mb-3">
              {message.map((value) => {
                return (
                  <div className="d-flex flex-column">
                    {user !== id ? (
                      <div style={{ float: "right" }}>{value}</div>
                    ) : (
                      <div style={{ float: "left" }}>{value}</div>
                    )}
                  </div>
                );
              })}
            </div>
            <Button
              variant="contained"
              onClick={() => setlogin({ login: false, username: "" })}
            >
              Logout
            </Button>

            <form className="chat-form" onSubmit={addEventListener}>
              <label className="chat-label">
                Enter a message:
                <input
                  type="text"
                  value={state}
                  className="chat-input"
                  onChange={(e) => setstate(e.target.value)}
                />
              </label>
              <input type="submit" className="chat-submit" value="enter" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SendMessage;

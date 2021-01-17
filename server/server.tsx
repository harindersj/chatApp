import express from "express";
import api from "./src/Routes/apiRoutes";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.use("/", api);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

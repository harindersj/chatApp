import express from "express";

const api = express.Router();

api.get("/", (req, res) => {
  res.send("working");
});

export default api;

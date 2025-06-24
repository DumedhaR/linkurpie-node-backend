import express from "express";

const app = express();

app.set("query parser", "extended");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Link your pie to the world 😃");
});

export default app;

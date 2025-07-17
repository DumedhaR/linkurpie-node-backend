import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.set("query parser", "extended");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Link your pie to the world 😃🥧");
});

app.use("/api/users", userRoutes);

export default app;

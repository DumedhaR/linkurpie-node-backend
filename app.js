import express from "express";
import userRoutes from "./routes/userRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";

const app = express();

app.set("query parser", "extended");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Link your pie to the world 😃🥧");
});

app.use("/api/users", userRoutes);
app.use("/api/content", contentRoutes);

export default app;

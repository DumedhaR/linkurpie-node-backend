import express from "express";
import userRoutes from "./routes/userRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import helmet from "helmet";
import rateLimiter from "express-rate-limiter";

const app = express();

app.set("query parser", "extended");

app.use(express.json({}));

app.use(helmet());

const limiter = rateLimiter({
  max: 1000,
  windowMin: 60 * 60 * 1000,
  message: "too much request from this IP, Please try again later!",
});
app.use("/api", limiter);

app.get("/", (req, res) => {
  res.send("Link your pie to the world 😃🥧");
});

app.use("/api/users", userRoutes);
app.use("/api/content", contentRoutes);

export default app;

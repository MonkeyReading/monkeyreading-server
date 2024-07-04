import express from "express";
import { authRouter } from "./src/routes/auth.routes.js";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Router setting
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

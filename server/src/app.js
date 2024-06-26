import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import appRouter from "./app/Routes/index.js";

const port = 5000;
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", appRouter);

app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.listen(port, () => console.log(`App listening to port ${port}`));

export default app;

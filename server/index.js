import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./db/db.js";
import router from "./routes/blogRoutes.js";
const port = 8000;
const app = express();
Connection();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/blog", router);
app.use(express.static("uploads"));

app.listen(port, () => console.log(`server is connected on ${port}`));

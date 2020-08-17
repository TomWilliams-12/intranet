import express from "express";
import Router from "./Routes.js";
import { Connection } from "./db/Index.js";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, () => console.log("listening"));

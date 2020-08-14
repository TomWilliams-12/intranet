import express from "express";
import Router from "./Routes";

const app = express();

app.use(express.static("public"));
app.use(Router());

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, () => console.log("listening"));

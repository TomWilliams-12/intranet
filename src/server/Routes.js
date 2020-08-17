import express from "express";
import Sites from "./db/Sites.js";

const router = express.Router();

const Router = () => {
  router.get("/api/sites", async (req, res) => {
    try {
      let sites = await Sites.all();
      res.json(sites);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });
};

export default Router;

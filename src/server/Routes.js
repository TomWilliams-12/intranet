import * as express from "express";
import DB from "./db";

const router = express.Router();

const Router = () => {
  router.get("/api/sites", async (req, res) => {
    try {
      let sites = await DB.Sites.all();
      res.json(sites);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });
};

export default Router;

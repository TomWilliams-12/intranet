import { Connection } from "./index.js";

export const Sites = async () => {
  return new Promise((resolve, reject) => {
    Connection.query("SELECT * from sites", (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

export default Sites;

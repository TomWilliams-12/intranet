import mysql from "mysql";
import config from "../config/Conn.js";

export const Connection = mysql.createConnection(config.mysql);

Connection.connect((err) => {
  if (err) console.log(err);
});

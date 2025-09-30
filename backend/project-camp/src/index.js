import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: "./.env",
});
const app = express();
const port = process.env.PORT || 4000;


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

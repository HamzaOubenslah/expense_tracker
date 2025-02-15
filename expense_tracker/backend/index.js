import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./src/db/db.js";
import transactionRoute from "./src/routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

const Server = () => {
  Connection();
  app.listen(PORT, () => {
    console.log("The Application Run In PORT", PORT);
  });
};
Server();

app.use("/", transactionRoute);

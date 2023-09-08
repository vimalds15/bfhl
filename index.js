import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import operationRoutes from "./routes/operationRoute.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/",operationRoutes)


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on PORT ${process.env.PORT}`
  )
);

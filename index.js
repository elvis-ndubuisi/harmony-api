import dotenv from "dotenv";
import config from "config";
import express from "express";
import helmet from "helmet";
import logger from "./utils/logger.utils.js";
import router from "./routes/index.js";

const app = express();
dotenv.config();

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(config.get("port"), () => logger.info("💥 Server started"));

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
import routes from "./routes/routes.js";

// Middlewares
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", routes);

export default app;

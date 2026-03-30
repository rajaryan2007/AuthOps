import "dotenv/config";
import express from "express";
import{morganMiddleware} from "./middleware/morgon.middleware.js";
import{ logger }from "./utils/logger.js";


const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());


app.use(morganMiddleware);

app.get("/", (req, res) => {
  logger.info("Root route hit");
  res.send("Server running ");
});

app.get("/error", (req, res) => {
  throw new Error("Test error");
});

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
import "dotenv/config";
import express from "express";
import { morganMiddleware } from "./middleware/morgon.middleware.js";
import { logger } from "./utils/logger.js";
import { verifyInternalRequest } from "./utils/config.js";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3001;


const INTERNAL_SECRET = process.env.OIDC_SECRET || '';



import authRoutes from "./routes/auth.routes.js";
import chatRoutes from "./routes/chat.routes.js";

app.use(cors());
app.use(express.json());
app.use(morganMiddleware);


app.use("/api", authRoutes);
app.use("/api/chat", chatRoutes);


app.get("/", (req, res) => {
  logger.info("Public root route hit");
  res.json({ message: "API is online. Login via the frontend to get a token." });
});


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  logger.info(` API Server started on port ${PORT}`);
});
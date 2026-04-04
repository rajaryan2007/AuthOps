import express from "express";
import { handleChat } from "../controller/chat.controller.js";
import { verifyInternalRequest } from "../utils/config.js";

const router = express.Router();

router.post("/", verifyInternalRequest, handleChat);

export default router;

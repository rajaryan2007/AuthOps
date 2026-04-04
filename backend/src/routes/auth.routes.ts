import express from "express";
import { getProfile } from "../controller/auth.controller.js";
import { verifyInternalRequest } from "../utils/config.js";

const router = express.Router();

router.get("/profile", verifyInternalRequest, getProfile);

export default router;

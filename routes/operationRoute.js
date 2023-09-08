import express from "express";
import { getDetail, performOperations } from "../controller/operationControllor.js";
const router = express.Router();

router.route("/bfhl").get(getDetail).post(performOperations)

export default router;
import express from "express";
import { devicecontroller } from "../controllers/devicecontroller.js";

const router = express.Router();

router.get("/", devicecontroller.all);
router.get("/:id", devicecontroller.one);
router.post("/", devicecontroller.insert);
router.put("/:id", devicecontroller.update);
router.delete("/:id", devicecontroller.delete);

export default router;
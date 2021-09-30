import { Router } from "express";
import recordController from "../controllers/record.controller";
import Validation from "../validation/record";

const { validatePayload } = Validation
const { store } = recordController;

const router = new Router();

router.post("/records", validatePayload, store);


export default router;

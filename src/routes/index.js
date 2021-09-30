import { Router } from "express";
import bookRoute from "./record.routes.";


const router = new Router();

router.use("/v1", bookRoute);

export default router;

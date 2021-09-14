import { Router } from "express";
import { ConvertsController } from "./controllers/ConvertsController";

const router = Router();

const convertsController = new ConvertsController();
router.post('/bin2dec', convertsController.create);

export { router };
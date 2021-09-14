import { Request, Response } from "express";
import { ConvertsService } from "../services/ConvertsService";

class ConvertsController {
    async create(request: Request, response: Response) {
        const { binary } = request.body;
        const convertsService = new ConvertsService();

        return response.json(await convertsService.create(binary));
    }
}

export { ConvertsController };
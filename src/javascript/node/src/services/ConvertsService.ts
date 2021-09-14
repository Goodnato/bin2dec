import { getCustomRepository, Repository } from "typeorm";
import { ConvertsRepository } from "../repositories/ConvertsRepository";

interface IConvertResponse {
    binary: string,
    status: number,
    decimal?: number,
    message: string
}

class ConvertsService {
    public async create(binary: string): Promise<IConvertResponse> {
        const convertsRepository = getCustomRepository(ConvertsRepository);

        if (!this.validationBinary(binary)) {
            return await convertsRepository.save(convertsRepository.create({
                binary: binary,
                status: 0,
                message: "Entry number is not binary"
            }));
        }

        let listNumbers = binary.toString().split('');
        let decimal = 0;
        let length = listNumbers.length - 1;
        listNumbers.forEach(value =>
            decimal += parseInt(value) * 2 ** length--
        );

        return await convertsRepository.save(convertsRepository.create({
            binary: binary,
            decimal: decimal,
            status: 1,
            message: "Success"
        }));
    }

    public validationBinary(binary: string): boolean {
        return /^[01]+$/.test(binary);
    }
}

export { ConvertsService };
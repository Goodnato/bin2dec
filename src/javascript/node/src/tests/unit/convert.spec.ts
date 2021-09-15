import { ConvertsService } from '../../services/ConvertsService';

describe('Binary number validation', () => {
    it('should return true when a binary number is correct', () => {
        const binary = "110101010";
        const convertService = Object.getPrototypeOf(new ConvertsService());

        expect(convertService.validationBinary(binary)).toBeTruthy()
    })

    it('should return false when a binary number is incorrect', () => {
        const binary = "011012";
        const convertService = Object.getPrototypeOf(new ConvertsService());

        expect(convertService.validationBinary(binary)).toBeFalsy()
    })

    it('should return false when a binary number is incorrect', () => {
        const binary = "000101a";
        const convertService = Object.getPrototypeOf(new ConvertsService());

        expect(convertService.validationBinary(binary)).toBeFalsy()
    })
})

describe('Convert to decimal', () => {
    it('should return a decimal number correct', () => {
        const binary = "110101010";
        const convertService = Object.getPrototypeOf(new ConvertsService());

        expect(convertService.convertBinToDec(binary)).toBe(426)
    })
})
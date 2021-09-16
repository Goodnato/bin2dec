import { ConvertsService } from '../../services/ConvertsService';

let convertService;
beforeEach(() => {
    convertService = Object.getPrototypeOf(new ConvertsService());
})

describe('Binary number validation', () => {
    it('should return true when a binary number is correct', () => {
        const binary = "110101010";

        expect(convertService.validationBinary(binary)).toBeTruthy()
    })

    it('should return false when a binary number is incorrect', () => {
        const binary = "011012";

        expect(convertService.validationBinary(binary)).toBeFalsy()
    })

    it('should return false when a binary number is incorrect', () => {
        const binary = "000101a";

        expect(convertService.validationBinary(binary)).toBeFalsy()
    })
})

describe('Convert to decimal', () => {
    it('should return a decimal number correct', () => {
        const binary = "110101010";

        expect(convertService.convertBinToDec(binary)).toBe(426)
    })
})
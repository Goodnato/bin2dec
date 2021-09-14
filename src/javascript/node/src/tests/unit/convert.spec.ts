import { ConvertsService } from '../../services/ConvertsService';

describe('Binary validation', () => {
    it('should return true when a binary number is correct', () => {
        const binary = "110101010";

        expect(new ConvertsService().validationBinary(binary)).toBeTruthy()
    })

    it('should return false when a binary number is incorrect', () => {
        const binary = "011012";

        expect(new ConvertsService().validationBinary(binary)).toBeFalsy()
    })

    it('should return false when a binary number is incorrect', () => {
        const binary = "000101a";

        expect(new ConvertsService().validationBinary(binary)).toBeFalsy()
    })
})
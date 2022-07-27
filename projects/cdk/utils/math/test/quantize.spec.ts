import {quantize} from '../quantize';

describe(`quantize`, () => {
    it(`Round up to the closest quantum`, () => {
        expect(quantize(5.5, 1)).toBe(6);
    });

    it(`Rounds down to the closest quantum`, () => {
        expect(quantize(5.4, 1)).toBe(5);
    });

    it(`Works with floating quanta`, () => {
        expect(quantize(1.1, 0.3)).toBe(1.2);
    });

    it(`Leaves number as is if it is already in the required discrete series`, () => {
        expect(quantize(1.2, 0.3)).toBe(1.2);
    });
});

import {getFractionPartPadded} from '../get-fractional-part-padded';

describe(`Getting fractional part from number`, () => {
    describe(`without precision argument`, () => {
        it(`integer value`, () => {
            expect(getFractionPartPadded(100)).toBe(``);
        });

        it(`negative integer value`, () => {
            expect(getFractionPartPadded(-10)).toBe(``);
        });

        it(`fractional value`, () => {
            expect(getFractionPartPadded(0.0002)).toBe(`0002`);
        });

        it(`negative fractional value`, () => {
            expect(getFractionPartPadded(-0.0002)).toBe(`0002`);
        });

        it(`fractional value with precision > 6`, () => {
            expect(getFractionPartPadded(0.00000002)).toBe(`00000002`);
        });

        it(`negative fractional value with precision > 6`, () => {
            expect(getFractionPartPadded(-0.00000002)).toBe(`00000002`);
        });
    });

    describe(`with precision argument equals 2`, () => {
        it(`integer value`, () => {
            expect(getFractionPartPadded(100, 2)).toBe(``);
        });

        it(`negative integer value`, () => {
            expect(getFractionPartPadded(-10, 2)).toBe(``);
        });

        it(`fractional value with small precision and bigger `, () => {
            expect(getFractionPartPadded(0.0002, 2)).toBe(`00`);
        });

        it(`fractional value with precision > 6`, () => {
            expect(getFractionPartPadded(0.00000002, 2)).toBe(`00`);
        });
    });

    describe(`with precision argument equals 8`, () => {
        it(`integer value`, () => {
            expect(getFractionPartPadded(100, 8)).toBe(``);
        });

        it(`negative integer value`, () => {
            expect(getFractionPartPadded(-10, 8)).toBe(``);
        });

        it(`fractional value with small precision and bigger `, () => {
            expect(getFractionPartPadded(0.0002, 8)).toBe(`0002`);
        });

        it(`fractional value with precision > 6`, () => {
            expect(getFractionPartPadded(0.00000002, 8)).toBe(`00000002`);
        });
    });
});

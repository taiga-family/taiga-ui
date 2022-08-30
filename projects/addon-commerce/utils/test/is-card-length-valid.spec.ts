import {tuiIsCardLengthValid} from '@taiga-ui/addon-commerce';

describe(`isCardLengthValid`, () => {
    describe(`Visa`, () => {
        it(`cannot be 12 digits long`, () => {
            expect(tuiIsCardLengthValid(`400000000000`)).toBe(false);
        });

        it(`can be 13 digits long`, () => {
            expect(tuiIsCardLengthValid(`4000000000000`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(tuiIsCardLengthValid(`4000000000000000000`)).toBe(true);
        });
    });

    describe(`Electron`, () => {
        it(`cannot be 15 digits long`, () => {
            expect(tuiIsCardLengthValid(`402600000000000`)).toBe(false);
        });

        it(`can only be 16 digits long`, () => {
            expect(tuiIsCardLengthValid(`4026000000000000`)).toBe(true);
        });

        it(`cannot be 17 digits long`, () => {
            expect(tuiIsCardLengthValid(`40260000000000000`)).toBe(false);
        });
    });

    describe(`Mastercard`, () => {
        it(`cannot be 15 digits long`, () => {
            expect(tuiIsCardLengthValid(`510000000000000`)).toBe(false);
        });

        it(`can be 16 digits long`, () => {
            expect(tuiIsCardLengthValid(`5100000000000000`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(tuiIsCardLengthValid(`5100000000000000000`)).toBe(true);
        });
    });

    describe(`Maestro`, () => {
        it(`can be 12 digits long`, () => {
            expect(tuiIsCardLengthValid(`560000000000`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(tuiIsCardLengthValid(`5600000000000000000`)).toBe(true);
        });
    });

    describe(`Mir`, () => {
        it(`cannot be 15 digits long`, () => {
            expect(tuiIsCardLengthValid(`220000000000000`)).toBe(false);
        });

        it(`can be 16 digits long`, () => {
            expect(tuiIsCardLengthValid(`2200000000000000`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(tuiIsCardLengthValid(`2200000000000000000`)).toBe(true);
        });
    });

    describe(`Unknown`, () => {
        it(`cannot be 7 digits long`, () => {
            expect(tuiIsCardLengthValid(`3566002`)).toBe(false);
        });

        it(`can be 16 digits long`, () => {
            expect(tuiIsCardLengthValid(`3566002020360505`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(tuiIsCardLengthValid(`3566002020360505000`)).toBe(true);
        });

        it(`cannot be 20 digits long`, () => {
            expect(tuiIsCardLengthValid(`35660020203605050000`)).toBe(false);
        });
    });
});

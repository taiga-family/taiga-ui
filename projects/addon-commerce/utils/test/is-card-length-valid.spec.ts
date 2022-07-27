import {isCardLengthValid} from '../is-card-length-valid';

describe(`isCardLengthValid`, () => {
    describe(`Visa`, () => {
        it(`cannot be 12 digits long`, () => {
            expect(isCardLengthValid(`400000000000`)).toBe(false);
        });

        it(`can be 13 digits long`, () => {
            expect(isCardLengthValid(`4000000000000`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(isCardLengthValid(`4000000000000000000`)).toBe(true);
        });
    });

    describe(`Electron`, () => {
        it(`cannot be 15 digits long`, () => {
            expect(isCardLengthValid(`402600000000000`)).toBe(false);
        });

        it(`can only be 16 digits long`, () => {
            expect(isCardLengthValid(`4026000000000000`)).toBe(true);
        });

        it(`cannot be 17 digits long`, () => {
            expect(isCardLengthValid(`40260000000000000`)).toBe(false);
        });
    });

    describe(`Mastercard`, () => {
        it(`cannot be 15 digits long`, () => {
            expect(isCardLengthValid(`510000000000000`)).toBe(false);
        });

        it(`can be 16 digits long`, () => {
            expect(isCardLengthValid(`5100000000000000`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(isCardLengthValid(`5100000000000000000`)).toBe(true);
        });
    });

    describe(`Maestro`, () => {
        it(`can be 12 digits long`, () => {
            expect(isCardLengthValid(`560000000000`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(isCardLengthValid(`5600000000000000000`)).toBe(true);
        });
    });

    describe(`Mir`, () => {
        it(`cannot be 15 digits long`, () => {
            expect(isCardLengthValid(`220000000000000`)).toBe(false);
        });

        it(`can be 16 digits long`, () => {
            expect(isCardLengthValid(`2200000000000000`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(isCardLengthValid(`2200000000000000000`)).toBe(true);
        });
    });

    describe(`Unknown`, () => {
        it(`cannot be 7 digits long`, () => {
            expect(isCardLengthValid(`3566002`)).toBe(false);
        });

        it(`can be 16 digits long`, () => {
            expect(isCardLengthValid(`3566002020360505`)).toBe(true);
        });

        it(`can be 19 digits long`, () => {
            expect(isCardLengthValid(`3566002020360505000`)).toBe(true);
        });

        it(`cannot be 20 digits long`, () => {
            expect(isCardLengthValid(`35660020203605050000`)).toBe(false);
        });
    });
});

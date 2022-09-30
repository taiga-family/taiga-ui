import {tuiIsPresent} from '../is-present';

describe(`isPresent`, () => {
    describe(`returns "true" if`, () => {
        it(`value === 1`, () => {
            expect(tuiIsPresent(1)).toBe(true);
        });

        it(`value === 0`, () => {
            expect(tuiIsPresent(0)).toBe(true);
        });

        it(`value === false`, () => {
            expect(tuiIsPresent(false)).toBe(true);
        });

        it(`value === NaN`, () => {
            expect(tuiIsPresent(NaN)).toBe(true);
        });

        it(`value === ''`, () => {
            expect(tuiIsPresent(``)).toBe(true);
        });

        it(`value === []`, () => {
            expect(tuiIsPresent([])).toBe(true);
        });
    });

    describe(`returns "false" if`, () => {
        it(`value === null`, () => {
            expect(tuiIsPresent(null)).toBe(false);
        });

        it(`value === undefined`, () => {
            expect(tuiIsPresent(undefined)).toBe(false);
        });
    });
});

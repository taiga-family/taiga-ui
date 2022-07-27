import {isPresent} from '../is-present';

describe(`isPresent`, () => {
    describe(`returns "true" if`, () => {
        it(`value === 1`, () => {
            expect(isPresent(1)).toBe(true);
        });

        it(`value === 0`, () => {
            expect(isPresent(0)).toBe(true);
        });

        it(`value === false`, () => {
            expect(isPresent(false)).toBe(true);
        });

        it(`value === NaN`, () => {
            expect(isPresent(NaN)).toBe(true);
        });

        it(`value === ''`, () => {
            expect(isPresent(``)).toBe(true);
        });

        it(`value === []`, () => {
            expect(isPresent([])).toBe(true);
        });
    });

    describe(`returns "false" if`, () => {
        it(`value === null`, () => {
            expect(isPresent(null)).toBe(false);
        });

        it(`value === undefined`, () => {
            expect(isPresent(undefined)).toBe(false);
        });
    });
});

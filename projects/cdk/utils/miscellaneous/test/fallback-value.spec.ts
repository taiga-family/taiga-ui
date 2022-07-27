import {fallbackValue} from '../fallback-value';

describe(`fallbackValue`, () => {
    describe(`returns original value if`, () => {
        it(`value === 1`, () => {
            expect(fallbackValue<number>(1, 99)).toBe(1);
        });

        it(`value === 0`, () => {
            expect(fallbackValue<number>(0, 99)).toBe(0);
        });

        it(`value === NaN`, () => {
            expect(fallbackValue<number>(NaN, 99)).toBeNaN();
        });

        it(`value === ''`, () => {
            expect(fallbackValue<string>(``, `test`)).toBe(``);
        });

        it(`value === []`, () => {
            const value: number[] = [];

            expect(fallbackValue<number[]>(value, [1])).toBe(value);
        });
    });

    describe(`returns fallback if`, () => {
        it(`value === null`, () => {
            expect(fallbackValue<number>(null, 99)).toBe(99);
        });

        it(`value === undefined`, () => {
            expect(fallbackValue<number>(undefined, 99)).toBe(99);
        });
    });
});

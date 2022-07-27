import {inRange} from '../in-range';

describe(`inRange returns`, () => {
    describe(`false if value`, () => {
        it(`is smaller than fromInclude`, () => {
            expect(inRange(2, 3, 5)).toBe(false);
        });

        it(`equals to toExclude`, () => {
            expect(inRange(5, 3, 5)).toBe(false);
        });

        it(`is bigger than toExclude`, () => {
            expect(inRange(6, 3, 5)).toBe(false);
        });
    });

    describe(`true if value`, () => {
        it(`equals to fromInclude`, () => {
            expect(inRange(3, 3, 5)).toBe(true);
        });

        it(`is bigger than fromInclude but smaller than toExclude`, () => {
            expect(inRange(4, 3, 5)).toBe(true);
        });
    });
});

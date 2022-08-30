import {tuiInRange} from '@taiga-ui/cdk';

describe(`inRange returns`, () => {
    describe(`false if value`, () => {
        it(`is smaller than fromInclude`, () => {
            expect(tuiInRange(2, 3, 5)).toBe(false);
        });

        it(`equals to toExclude`, () => {
            expect(tuiInRange(5, 3, 5)).toBe(false);
        });

        it(`is bigger than toExclude`, () => {
            expect(tuiInRange(6, 3, 5)).toBe(false);
        });
    });

    describe(`true if value`, () => {
        it(`equals to fromInclude`, () => {
            expect(tuiInRange(3, 3, 5)).toBe(true);
        });

        it(`is bigger than fromInclude but smaller than toExclude`, () => {
            expect(tuiInRange(4, 3, 5)).toBe(true);
        });
    });
});

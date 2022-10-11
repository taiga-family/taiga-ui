import {tuiPx} from '@taiga-ui/cdk';

describe(`px`, () => {
    it(`returns number with px`, () => {
        expect(tuiPx(42)).toBe(`42px`);
    });
});

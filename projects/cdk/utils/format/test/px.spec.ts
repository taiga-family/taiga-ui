import {tuiPx} from '../px';

describe(`px`, () => {
    it(`returns number with px`, () => {
        expect(tuiPx(42)).toBe(`42px`);
    });
});

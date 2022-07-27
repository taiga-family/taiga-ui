import {px} from '../px';

describe(`px`, () => {
    it(`returns number with px`, () => {
        expect(px(42)).toBe(`42px`);
    });
});

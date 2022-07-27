import {easeInOutQuad} from '../ease-in-out-quad';

describe(`easeInOutQuad`, () => {
    it(`with 0`, () => {
        expect(easeInOutQuad(0)).toBe(0);
    });

    it(`with 1`, () => {
        expect(easeInOutQuad(1)).toBe(1);
    });
});

import {tuiEaseInOutQuad} from '../ease-in-out-quad';

describe(`easeInOutQuad`, () => {
    it(`with 0`, () => {
        expect(tuiEaseInOutQuad(0)).toBe(0);
    });

    it(`with 1`, () => {
        expect(tuiEaseInOutQuad(1)).toBe(1);
    });
});

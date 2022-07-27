import {clamp} from '../clamp';

describe(`clamp`, () => {
    it(`returns min if value is smaller`, () => {
        expect(clamp(1, 2, 5)).toBe(2);
    });

    it(`returns max if value is bigger`, () => {
        expect(clamp(6, 2, 5)).toBe(5);
    });

    it(`returns value if it is in between the limits`, () => {
        expect(clamp(3, 2, 5)).toBe(3);
    });
});

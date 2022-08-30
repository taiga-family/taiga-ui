import {tuiClamp} from '@taiga-ui/cdk';

describe(`clamp`, () => {
    it(`returns min if value is smaller`, () => {
        expect(tuiClamp(1, 2, 5)).toBe(2);
    });

    it(`returns max if value is bigger`, () => {
        expect(tuiClamp(6, 2, 5)).toBe(5);
    });

    it(`returns value if it is in between the limits`, () => {
        expect(tuiClamp(3, 2, 5)).toBe(3);
    });
});

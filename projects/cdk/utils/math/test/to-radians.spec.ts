import {tuiToRadians} from '../to-radians';

describe(`toRadians`, () => {
    it(`converts 0 to 0`, () => {
        expect(tuiToRadians(0)).toBe(0);
    });

    it(`converts 180 to PI`, () => {
        expect(tuiToRadians(180)).toBe(Math.PI);
    });

    it(`converts 360 to 2PI`, () => {
        expect(tuiToRadians(360)).toBe(2 * Math.PI);
    });

    it(`converts -180 to -PI`, () => {
        expect(tuiToRadians(-180)).toBe(-Math.PI);
    });
});

import {tuiStringHashToHsl} from '@taiga-ui/kit';

describe(`Convert string to HSL color`, () => {
    it(`The name in Russian is converted correctly`, () => {
        expect(tuiStringHashToHsl(`Ширяева Клементина`)).toEqual(`hsl(101,61%,81%)`);
    });

    it(`English name is converted correctly`, () => {
        expect(tuiStringHashToHsl(`John Snow`)).toEqual(`hsl(96,61%,81%)`);
    });

    it(`Special characters are converted correctly`, () => {
        expect(tuiStringHashToHsl(`!@#$%^&*(`)).toEqual(`hsl(-357,58%,78%)`);
    });
});

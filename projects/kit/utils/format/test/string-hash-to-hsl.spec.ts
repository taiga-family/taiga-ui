import {stringHashToHsl} from '../string-hash-to-hsl';

describe('Convert string to HSL color', () => {
    it('The name in Russian is converted correctly', () => {
        expect(stringHashToHsl('Ширяева Клементина')).toEqual('hsl(101,61%,81%)');
    });

    it('English name is converted correctly', () => {
        expect(stringHashToHsl('John Snow')).toEqual('hsl(96,61%,81%)');
    });

    it('Special characters are converted correctly', () => {
        expect(stringHashToHsl('!@#$%^&*(')).toEqual('hsl(-357,58%,78%)');
    });
});

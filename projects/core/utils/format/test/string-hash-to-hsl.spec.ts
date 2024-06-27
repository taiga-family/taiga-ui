import {tuiStringHashToHsl} from '../string-hash-to-hsl';

describe('Convert string to HSL color', () => {
    it('the name in Russian is converted correctly', () => {
        expect(tuiStringHashToHsl('Ширяева Клементина')).toBe('hsl(101,61%,81%)');
    });

    it('english name is converted correctly', () => {
        expect(tuiStringHashToHsl('John Snow')).toBe('hsl(96,61%,81%)');
    });

    it('special characters are converted correctly', () => {
        expect(tuiStringHashToHsl('!@#$%^&*(')).toBe('hsl(-357,58%,78%)');
    });
});

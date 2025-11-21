import {tuiAutoColor} from '@taiga-ui/core';

describe('Convert string to HSL color', () => {
    it('the name in Russian is converted correctly', () => {
        expect(tuiAutoColor('Ширяева Клементина')).toBe('hsl(101,61%,81%)');
    });

    it('english name is converted correctly', () => {
        expect(tuiAutoColor('John Snow')).toBe('hsl(96,61%,81%)');
    });

    it('special characters are converted correctly', () => {
        expect(tuiAutoColor('!@#$%^&*(')).toBe('hsl(-357,58%,78%)');
    });
});

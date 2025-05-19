import {tuiObfuscate} from '@taiga-ui/cdk';

describe('obfuscate', () => {
    it('keep empty string', () => {
        expect(tuiObfuscate('', '*')).toBe('');
    });

    it('obfuscate latin alphabet', () => {
        expect(tuiObfuscate('aB', '*')).toBe('**');
    });

    it('obfuscate numbers', () => {
        expect(tuiObfuscate('12', '*')).toBe('**');
    });

    it('obfuscate cyrillic alphabet', () => {
        expect(tuiObfuscate('аБ', '*')).toBe('**');
    });

    it('not obfuscate spaces', () => {
        expect(tuiObfuscate(' a  b ', '*')).toBe(' *  * ');
    });

    it('not obfuscate special characters', () => {
        expect(tuiObfuscate('!@#$%^&*()_+=-', '*')).toBe('!@#$%^&*()_+=-');
    });

    it('obfuscates all characters when the value is shorter than 3', () => {
        expect(tuiObfuscate('a', '*')).toBe('*');
        expect(tuiObfuscate('abc', '*')).toBe('***');
        expect(tuiObfuscate('ab-c', '*')).toBe('**-*');
    });

    it('shows the first and last characters when the value is longer than 3 but shorter than 8', () => {
        expect(tuiObfuscate('abcd', '*')).toBe('a**d');
        expect(tuiObfuscate('abcdefg', '*')).toBe('a*****g');
        expect(tuiObfuscate('(abcdefg)', '*')).toBe('(a*****g)');
    });

    it('shows the first 2 and last 2 characters when the value is longer than 8', () => {
        expect(tuiObfuscate('abcdefgh', '*')).toBe('ab****gh');
        expect(tuiObfuscate('abcdefghi', '*')).toBe('ab*****hi');
        expect(tuiObfuscate('(abcdefgh)', '*')).toBe('(ab****gh)');
    });
});

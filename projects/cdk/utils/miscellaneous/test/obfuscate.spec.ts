import {tuiObfuscate} from '@taiga-ui/cdk';

describe('obfuscate', () => {
    it('keep empty string', () => {
        expect(tuiObfuscate('', '*')).toBe('');
    });

    it('obfuscate value', () => {
        expect(tuiObfuscate('abc', '*')).toBe('***');
    });
});

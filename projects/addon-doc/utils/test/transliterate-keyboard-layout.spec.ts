import {tuiTransliterateKeyboardLayout} from '@taiga-ui/addon-doc';

describe('tuiTransliterateKeyboardLayout', () => {
    it('should return empty string for empty input', () => {
        expect(tuiTransliterateKeyboardLayout('')).toBe('');
    });

    it('should transliterate Russian layout characters into English layout characters', () => {
        // cspell:disable-next-line
        expect(tuiTransliterateKeyboardLayout('привет мир')).toBe('ghbdtn vbh');
        // cspell:disable-next-line
        expect(tuiTransliterateKeyboardLayout('ыудусе')).toBe('select');
        // cspell:disable-next-line
        expect(tuiTransliterateKeyboardLayout('штзге еуче')).toBe('input text');
    });

    it('should not change non-Russian layout characters', () => {
        expect(tuiTransliterateKeyboardLayout('hello world')).toBe('hello world');
        expect(tuiTransliterateKeyboardLayout('select')).toBe('select');
    });
});

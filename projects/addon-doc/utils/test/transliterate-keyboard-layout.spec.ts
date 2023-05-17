import {tuiTransliterateKeyboardLayout} from '@taiga-ui/addon-doc';

describe(`tuiTransliterateKeyboardLayout`, () => {
    it(`should return empty string for empty input`, () => {
        expect(tuiTransliterateKeyboardLayout(``)).toEqual(``);
    });

    it(`should transliterate Russian layout characters into English layout characters`, () => {
        // cspell:disable-next-line
        expect(tuiTransliterateKeyboardLayout(`привет мир`)).toEqual(`ghbdtn vbh`);
        // cspell:disable-next-line
        expect(tuiTransliterateKeyboardLayout(`ыудусе`)).toEqual(`select`);
        // cspell:disable-next-line
        expect(tuiTransliterateKeyboardLayout(`штзге еуче`)).toEqual(`input text`);
    });

    it(`should not change non-Russian layout characters`, () => {
        expect(tuiTransliterateKeyboardLayout(`hello world`)).toEqual(`hello world`);
        expect(tuiTransliterateKeyboardLayout(`select`)).toEqual(`select`);
    });
});

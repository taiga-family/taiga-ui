import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {tuiCapitalizeFirstLetter} from '@taiga-ui/core';

describe(`Capitalize the first letter`, () => {
    it(`Capitalizes the first letter of a word`, () => {
        expect(tuiCapitalizeFirstLetter(`lorem`)).toBe(`Lorem`);
    });

    it(`Capitalizes the first letter and skip of each word`, () => {
        expect(tuiCapitalizeFirstLetter(`lorem${CHAR_NO_BREAK_SPACE}ipsum`)).toBe(
            `Lorem${CHAR_NO_BREAK_SPACE}ipsum`,
        );
    });

    it(`skip transforms the other letters of a word to lowercase`, () => {
        expect(tuiCapitalizeFirstLetter(`LOREM${CHAR_NO_BREAK_SPACE}IPSUM`)).toBe(
            `LOREM${CHAR_NO_BREAK_SPACE}IPSUM`,
        );
    });

    it(`works for the non-breaking space character`, () => {
        expect(
            tuiCapitalizeFirstLetter(
                `lorem${CHAR_NO_BREAK_SPACE}ipsum${CHAR_NO_BREAK_SPACE}dolor`,
            ),
        ).toBe(`Lorem${CHAR_NO_BREAK_SPACE}ipsum${CHAR_NO_BREAK_SPACE}dolor`);
    });

    it(`a hyphen inside the word does not break it into two`, () => {
        expect(tuiCapitalizeFirstLetter(`up-to-date`)).toBe(`Up-to-date`);
    });

    it(`a dot inside the word does not break it into two`, () => {
        expect(tuiCapitalizeFirstLetter(`adrian.ripburger`)).toBe(`Adrian.ripburger`);
    });

    it(`a comma inside the word does not break it into two`, () => {
        expect(tuiCapitalizeFirstLetter(`malcolm,corley`)).toBe(`Malcolm,corley`);
    });
});

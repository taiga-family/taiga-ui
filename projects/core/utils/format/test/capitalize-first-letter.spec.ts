import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {capitalizeFirstLetter} from '@taiga-ui/core';

describe(`Capitalize the first letter`, () => {
    it(`Capitalizes the first letter of a word`, () => {
        expect(capitalizeFirstLetter(`lorem`)).toBe(`Lorem`);
    });

    it(`Capitalizes the first letter and skip of each word`, () => {
        expect(capitalizeFirstLetter(`lorem${CHAR_NO_BREAK_SPACE}ipsum`)).toBe(
            `Lorem${CHAR_NO_BREAK_SPACE}ipsum`,
        );
    });

    it(`skip transforms the other letters of a word to lowercase`, () => {
        expect(capitalizeFirstLetter(`LOREM${CHAR_NO_BREAK_SPACE}IPSUM`)).toBe(
            `LOREM${CHAR_NO_BREAK_SPACE}IPSUM`,
        );
    });

    it(`works for the non-breaking space character`, () => {
        expect(
            capitalizeFirstLetter(
                `lorem${CHAR_NO_BREAK_SPACE}ipsum${CHAR_NO_BREAK_SPACE}dolor`,
            ),
        ).toBe(`Lorem${CHAR_NO_BREAK_SPACE}ipsum${CHAR_NO_BREAK_SPACE}dolor`);
    });

    it(`a hyphen inside the word does not break it into two`, () => {
        expect(capitalizeFirstLetter(`up-to-date`)).toBe(`Up-to-date`);
    });

    it(`a dot inside the word does not break it into two`, () => {
        expect(capitalizeFirstLetter(`adrian.ripburger`)).toBe(`Adrian.ripburger`);
    });

    it(`a comma inside the word does not break it into two`, () => {
        expect(capitalizeFirstLetter(`malcolm,corley`)).toBe(`Malcolm,corley`);
    });
});

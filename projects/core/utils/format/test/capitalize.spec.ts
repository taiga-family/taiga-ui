import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {tuiCapitalize} from '@taiga-ui/core';

describe(`Capitalize`, () => {
    it(`Capitalizes the first letter of a word`, () => {
        expect(tuiCapitalize(`lorem`)).toBe(`Lorem`);
    });

    it(`Capitalizes the first letter of each word`, () => {
        expect(tuiCapitalize(`lorem ipsum`)).toBe(`Lorem Ipsum`);
    });

    it(`transforms the other letters of a word to lowercase`, () => {
        expect(tuiCapitalize(`LOREM IPSUM`)).toBe(`Lorem Ipsum`);
    });

    it(`works for the non-breaking space character`, () => {
        expect(
            tuiCapitalize(`lorem${CHAR_NO_BREAK_SPACE}ipsum${CHAR_NO_BREAK_SPACE}dolor`),
        ).toBe(`Lorem${CHAR_NO_BREAK_SPACE}Ipsum${CHAR_NO_BREAK_SPACE}Dolor`);
    });

    it(`a hyphen inside the word does not break it into two`, () => {
        expect(tuiCapitalize(`up-to-date`)).toBe(`Up-to-date`);
    });

    it(`a dot inside the word does not break it into two`, () => {
        expect(tuiCapitalize(`adrian.ripburger`)).toBe(`Adrian.ripburger`);
    });

    it(`a comma inside the word does not break it into two`, () => {
        expect(tuiCapitalize(`malcolm,corley`)).toBe(`Malcolm,corley`);
    });

    it(`correctly handles all sorts of things`, () => {
        expect(
            tuiCapitalize(
                `Добавь тЕст. где 2 предложения: с!Разными №знаками;препинания, ок?`,
            ),
        ).toBe(`Добавь Тест. Где 2 Предложения: С!разными №знаками;препинания, Ок?`);
    });
});

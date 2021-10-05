import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {capitalize} from '../capitalize';

describe('Capitalize', () => {
    it('Capitalizes the first letter of a word', () => {
        expect(capitalize('lorem')).toBe('Lorem');
    });

    it('Capitalizes the first letter of each word', () => {
        expect(capitalize('lorem ipsum')).toBe('Lorem Ipsum');
    });

    it('transforms the other letters of a word to lowercase', () => {
        expect(capitalize('LOREM IPSUM')).toBe('Lorem Ipsum');
    });

    it('works for the non-breaking space character', () => {
        expect(
            capitalize(`lorem${CHAR_NO_BREAK_SPACE}ipsum${CHAR_NO_BREAK_SPACE}dolor`),
        ).toBe(`Lorem${CHAR_NO_BREAK_SPACE}Ipsum${CHAR_NO_BREAK_SPACE}Dolor`);
    });

    it('a hyphen inside the word does not break it into two', () => {
        expect(capitalize('up-to-date')).toBe('Up-to-date');
    });

    it('a dot inside the word does not break it into two', () => {
        expect(capitalize('adrian.ripburger')).toBe('Adrian.ripburger');
    });

    it('a comma inside the word does not break it into two', () => {
        expect(capitalize('malcolm,corley')).toBe('Malcolm,corley');
    });

    it('correctly handles all sorts of things', () => {
        expect(
            capitalize(
                'Добавь тЕст. где 2 предложения: с!Разными №знаками;препинания, ок?',
            ),
        ).toBe('Добавь Тест. Где 2 Предложения: С!разными №знаками;препинания, Ок?');
    });
});

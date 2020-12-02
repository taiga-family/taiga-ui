import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {capitalize} from '../capitalize';

describe('Capitalize', () => {
    it('Делает первую букву слова заглавной', () => {
        expect(capitalize('бэн')).toBe('Бэн');
    });

    it('Делает первую букву каждого слова заглавной', () => {
        expect(capitalize('папаша торк')).toBe('Папаша Торк');
    });

    it('Делает остальные буквы слова строчными', () => {
        expect(capitalize('FULL THROTTLE')).toBe('Full Throttle');
    });

    it('Работает для символа неразрывного пробела', () => {
        expect(
            capitalize(
                `тяжёлый${CHAR_NO_BREAK_SPACE}запах${CHAR_NO_BREAK_SPACE}асфальта`,
            ),
        ).toBe(`Тяжёлый${CHAR_NO_BREAK_SPACE}Запах${CHAR_NO_BREAK_SPACE}Асфальта`);
    });

    it('Слово с дефисом не считается за два слова', () => {
        expect(capitalize('корлей-моторс')).toBe('Корлей-моторс');
    });

    it('Точка внутри слова не разбивает его на два', () => {
        expect(capitalize('adrian.ripburger')).toBe('Adrian.ripburger');
    });

    it('Запятая внутри слова не разбивает его на два', () => {
        expect(capitalize('malcolm,corley')).toBe('Malcolm,corley');
    });

    it('Корректно отрабатывает всякую всячину', () => {
        expect(
            capitalize(
                'Добавь тЕст. где 2 предложения: с!Разными №знаками;препинания, ок?',
            ),
        ).toBe('Добавь Тест. Где 2 Предложения: С!разными №знаками;препинания, Ок?');
    });
});

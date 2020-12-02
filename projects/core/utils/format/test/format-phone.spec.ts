import {formatPhone} from '../format-phone';

describe('Форматирование телефона', () => {
    it('Корректно вставляет скобки и дефисы', () => {
        expect(formatPhone('+78005557778', '+7', '(###) ###-##-##')).toEqual(
            `+7 (800) 555-77-78`,
        );
    });

    it('Корректно работает со строкой без countryCode', () => {
        expect(formatPhone('8005557778', '+7', '(###) ###-##-##')).toBe(
            `+7 (800) 555-77-78`,
        );
    });

    it('Корректно вставляет любые другие символы', () => {
        expect(formatPhone('+78005557778', '+7', '/###/###_##_##')).toBe(
            `+7 /800/555_77_78`,
        );
    });

    it('returns country code with whitespace if only country code was inputed', () => {
        expect(formatPhone('+7', '+7', '/###/###_##_##')).toBe(`+7 `);
    });
});

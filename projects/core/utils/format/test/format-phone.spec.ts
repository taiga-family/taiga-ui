import {formatPhone} from '../format-phone';

describe('Phone number formatting', () => {
    it('inserts parentheses and hyphens correctly', () => {
        expect(formatPhone('+78005557778', '+7', '(###) ###-##-##')).toEqual(
            `+7 (800) 555-77-78`,
        );
    });

    it('works correctly with a string without countryCode', () => {
        expect(formatPhone('8005557778', '+7', '(###) ###-##-##')).toBe(
            `+7 (800) 555-77-78`,
        );
    });

    it('inserts any other characters correctly', () => {
        expect(formatPhone('+78005557778', '+7', '/###/###_##_##')).toBe(
            `+7 /800/555_77_78`,
        );
    });

    it('returns country code with whitespace if only country code is given', () => {
        expect(formatPhone('+7', '+7', '/###/###_##_##')).toBe(`+7 `);
    });
});

import {stringHashToHsl} from '../string-hash-to-hsl';

describe('Преобразование строки в HSL-цвет', () => {
    it('Корректно преобразовывается имя на русском', () => {
        expect(stringHashToHsl('Ширяева Клементина')).toEqual('hsl(101,61%,81%)');
    });

    it('Корректно преобразовывается имя на английском', () => {
        expect(stringHashToHsl('John Snow')).toEqual('hsl(96,61%,81%)');
    });

    it('Корректно преобразовываются спецсимволы', () => {
        expect(stringHashToHsl('!@#$%^&*(')).toEqual('hsl(-357,58%,78%)');
    });
});

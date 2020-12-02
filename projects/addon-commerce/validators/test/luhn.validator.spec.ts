import {FormControl} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import {tuiCreateLuhnValidator} from '../luhn.validator';

describe('tuiCreateLuhnValidator', () => {
    const control = new FormControl('', tuiCreateLuhnValidator());
    const controlCustom = new FormControl('', tuiCreateLuhnValidator('ошибка'));
    const error = {luhn: new TuiValidationError('Неверный формат карты')};

    it('Валидный номер карты валиден, проверка 1', () => {
        control.setValue('4111 1111 1111 1111');
        control.updateValueAndValidity();

        expect(control.valid).toBe(true);
    });

    it('Валидный номер карты валиден, проверка 2', () => {
        control.setValue('4000 0000 0000 0333');
        control.updateValueAndValidity();

        expect(control.valid).toBe(true);
    });

    it('Валидный номер карты валиден, проверка 3', () => {
        control.setValue('5000 0000 0000 0108');
        control.updateValueAndValidity();

        expect(control.valid).toBe(true);
    });

    it('Невалидный номер карты выдаёт ошибку, проверка 1', () => {
        control.setValue('1234 1234 1234 1234');
        control.updateValueAndValidity();

        expect(control.errors).toEqual(error);
    });

    it('Невалидный номер карты выдаёт ошибку, проверка 2', () => {
        control.setValue('1234 5678 9123 4567');
        control.updateValueAndValidity();

        expect(control.errors).toEqual(error);
    });

    it('Невалидный номер карты выдаёт ошибку, проверка 3', () => {
        control.setValue('2345 7823 4095 8723');
        control.updateValueAndValidity();

        expect(control.errors).toEqual(error);
    });

    it('Кастомный текст ошибки', () => {
        controlCustom.setValue('2345 7823 4095 8723');
        controlCustom.updateValueAndValidity();

        expect(controlCustom.errors).toEqual({luhn: new TuiValidationError('ошибка')});
    });
});

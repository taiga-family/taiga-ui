import {TuiPaymentSystem} from '@taiga-ui/addon-commerce';

import {tuiGetPaymentSystem} from '../get-payment-system';

describe('getPaymentSystem', () => {
    describe('Visa', () => {
        it('4', () => {
            expect(tuiGetPaymentSystem('4000')).toBe(TuiPaymentSystem.Visa);
        });
    });

    describe(TuiPaymentSystem.Electron, () => {
        it('4026', () => {
            expect(tuiGetPaymentSystem('4026')).toBe(TuiPaymentSystem.Electron);
        });

        it('4175', () => {
            expect(tuiGetPaymentSystem('4175')).toBe(TuiPaymentSystem.Electron);
        });

        it('4405', () => {
            expect(tuiGetPaymentSystem('4405')).toBe(TuiPaymentSystem.Electron);
        });

        it('4508', () => {
            expect(tuiGetPaymentSystem('4508')).toBe(TuiPaymentSystem.Electron);
        });

        it('4844', () => {
            expect(tuiGetPaymentSystem('4844')).toBe(TuiPaymentSystem.Electron);
        });

        it('4913', () => {
            expect(tuiGetPaymentSystem('4913')).toBe(TuiPaymentSystem.Electron);
        });

        it('4917', () => {
            expect(tuiGetPaymentSystem('4917')).toBe(TuiPaymentSystem.Electron);
        });
    });

    describe(TuiPaymentSystem.Mastercard, () => {
        it('2221', () => {
            expect(tuiGetPaymentSystem('2221')).toBe(TuiPaymentSystem.Mastercard);
        });

        it('2720', () => {
            expect(tuiGetPaymentSystem('2720')).toBe(TuiPaymentSystem.Mastercard);
        });

        it('5100', () => {
            expect(tuiGetPaymentSystem('5100')).toBe(TuiPaymentSystem.Mastercard);
        });

        it('5500', () => {
            expect(tuiGetPaymentSystem('5500')).toBe(TuiPaymentSystem.Mastercard);
        });

        it('5', () => {
            expect(tuiGetPaymentSystem('5')).toBe(TuiPaymentSystem.Mastercard);
        });
    });

    describe(TuiPaymentSystem.Maestro, () => {
        it('5000', () => {
            expect(tuiGetPaymentSystem('5000')).toBe(TuiPaymentSystem.Maestro);
        });

        it('5090', () => {
            expect(tuiGetPaymentSystem('5090')).toBe(TuiPaymentSystem.Maestro);
        });

        it('5600', () => {
            expect(tuiGetPaymentSystem('5600')).toBe(TuiPaymentSystem.Maestro);
        });

        it('5890', () => {
            expect(tuiGetPaymentSystem('5890')).toBe(TuiPaymentSystem.Maestro);
        });

        it('6000', () => {
            expect(tuiGetPaymentSystem('6000')).toBe(TuiPaymentSystem.Maestro);
        });

        it('50', () => {
            expect(tuiGetPaymentSystem('50')).toBe(TuiPaymentSystem.Maestro);
        });

        it('56', () => {
            expect(tuiGetPaymentSystem('56')).toBe(TuiPaymentSystem.Maestro);
        });

        it('58', () => {
            expect(tuiGetPaymentSystem('58')).toBe(TuiPaymentSystem.Maestro);
        });
    });

    describe('Mir', () => {
        it('2200', () => {
            expect(tuiGetPaymentSystem('2200')).toBe(TuiPaymentSystem.Mir);
        });

        it('2204', () => {
            expect(tuiGetPaymentSystem('2204')).toBe(TuiPaymentSystem.Mir);
        });
    });
});

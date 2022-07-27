import {TuiPaymentSystem} from '../../enums/payment-system';
import {getPaymentSystem} from '../get-payment-system';

describe(`getPaymentSystem`, () => {
    describe(`Visa`, () => {
        it(`4`, () => {
            expect(getPaymentSystem(`4000`)).toBe(TuiPaymentSystem.Visa);
        });
    });

    describe(`Electron`, () => {
        it(`4026`, () => {
            expect(getPaymentSystem(`4026`)).toBe(TuiPaymentSystem.Electron);
        });

        it(`4175`, () => {
            expect(getPaymentSystem(`4175`)).toBe(TuiPaymentSystem.Electron);
        });

        it(`4405`, () => {
            expect(getPaymentSystem(`4405`)).toBe(TuiPaymentSystem.Electron);
        });

        it(`4508`, () => {
            expect(getPaymentSystem(`4508`)).toBe(TuiPaymentSystem.Electron);
        });

        it(`4844`, () => {
            expect(getPaymentSystem(`4844`)).toBe(TuiPaymentSystem.Electron);
        });

        it(`4913`, () => {
            expect(getPaymentSystem(`4913`)).toBe(TuiPaymentSystem.Electron);
        });

        it(`4917`, () => {
            expect(getPaymentSystem(`4917`)).toBe(TuiPaymentSystem.Electron);
        });
    });

    describe(`Mastercard`, () => {
        it(`2221`, () => {
            expect(getPaymentSystem(`2221`)).toBe(TuiPaymentSystem.Mastercard);
        });

        it(`2720`, () => {
            expect(getPaymentSystem(`2720`)).toBe(TuiPaymentSystem.Mastercard);
        });

        it(`5100`, () => {
            expect(getPaymentSystem(`5100`)).toBe(TuiPaymentSystem.Mastercard);
        });

        it(`5500`, () => {
            expect(getPaymentSystem(`5500`)).toBe(TuiPaymentSystem.Mastercard);
        });

        it(`5`, () => {
            expect(getPaymentSystem(`5`)).toBe(TuiPaymentSystem.Mastercard);
        });
    });

    describe(`Maestro`, () => {
        it(`5000`, () => {
            expect(getPaymentSystem(`5000`)).toBe(TuiPaymentSystem.Maestro);
        });

        it(`5090`, () => {
            expect(getPaymentSystem(`5090`)).toBe(TuiPaymentSystem.Maestro);
        });

        it(`5600`, () => {
            expect(getPaymentSystem(`5600`)).toBe(TuiPaymentSystem.Maestro);
        });

        it(`5890`, () => {
            expect(getPaymentSystem(`5890`)).toBe(TuiPaymentSystem.Maestro);
        });

        it(`6000`, () => {
            expect(getPaymentSystem(`6000`)).toBe(TuiPaymentSystem.Maestro);
        });

        it(`50`, () => {
            expect(getPaymentSystem(`50`)).toBe(TuiPaymentSystem.Maestro);
        });

        it(`56`, () => {
            expect(getPaymentSystem(`56`)).toBe(TuiPaymentSystem.Maestro);
        });

        it(`58`, () => {
            expect(getPaymentSystem(`58`)).toBe(TuiPaymentSystem.Maestro);
        });
    });

    describe(`Mir`, () => {
        it(`2200`, () => {
            expect(getPaymentSystem(`2200`)).toBe(TuiPaymentSystem.Mir);
        });

        it(`2204`, () => {
            expect(getPaymentSystem(`2204`)).toBe(TuiPaymentSystem.Mir);
        });
    });
});

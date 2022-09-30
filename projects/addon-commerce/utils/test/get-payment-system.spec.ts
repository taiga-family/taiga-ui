import {tuiGetPaymentSystem} from '../get-payment-system';

describe(`getPaymentSystem`, () => {
    describe(`Visa`, () => {
        it(`4`, () => {
            expect(tuiGetPaymentSystem(`4000`)).toBe(`visa`);
        });
    });

    describe(`electron`, () => {
        it(`4026`, () => {
            expect(tuiGetPaymentSystem(`4026`)).toBe(`electron`);
        });

        it(`4175`, () => {
            expect(tuiGetPaymentSystem(`4175`)).toBe(`electron`);
        });

        it(`4405`, () => {
            expect(tuiGetPaymentSystem(`4405`)).toBe(`electron`);
        });

        it(`4508`, () => {
            expect(tuiGetPaymentSystem(`4508`)).toBe(`electron`);
        });

        it(`4844`, () => {
            expect(tuiGetPaymentSystem(`4844`)).toBe(`electron`);
        });

        it(`4913`, () => {
            expect(tuiGetPaymentSystem(`4913`)).toBe(`electron`);
        });

        it(`4917`, () => {
            expect(tuiGetPaymentSystem(`4917`)).toBe(`electron`);
        });
    });

    describe(`mastercard`, () => {
        it(`2221`, () => {
            expect(tuiGetPaymentSystem(`2221`)).toBe(`mastercard`);
        });

        it(`2720`, () => {
            expect(tuiGetPaymentSystem(`2720`)).toBe(`mastercard`);
        });

        it(`5100`, () => {
            expect(tuiGetPaymentSystem(`5100`)).toBe(`mastercard`);
        });

        it(`5500`, () => {
            expect(tuiGetPaymentSystem(`5500`)).toBe(`mastercard`);
        });

        it(`5`, () => {
            expect(tuiGetPaymentSystem(`5`)).toBe(`mastercard`);
        });
    });

    describe(`maestro`, () => {
        it(`5000`, () => {
            expect(tuiGetPaymentSystem(`5000`)).toBe(`maestro`);
        });

        it(`5090`, () => {
            expect(tuiGetPaymentSystem(`5090`)).toBe(`maestro`);
        });

        it(`5600`, () => {
            expect(tuiGetPaymentSystem(`5600`)).toBe(`maestro`);
        });

        it(`5890`, () => {
            expect(tuiGetPaymentSystem(`5890`)).toBe(`maestro`);
        });

        it(`6000`, () => {
            expect(tuiGetPaymentSystem(`6000`)).toBe(`maestro`);
        });

        it(`50`, () => {
            expect(tuiGetPaymentSystem(`50`)).toBe(`maestro`);
        });

        it(`56`, () => {
            expect(tuiGetPaymentSystem(`56`)).toBe(`maestro`);
        });

        it(`58`, () => {
            expect(tuiGetPaymentSystem(`58`)).toBe(`maestro`);
        });
    });

    describe(`Mir`, () => {
        it(`2200`, () => {
            expect(tuiGetPaymentSystem(`2200`)).toBe(`mir`);
        });

        it(`2204`, () => {
            expect(tuiGetPaymentSystem(`2204`)).toBe(`mir`);
        });
    });
});

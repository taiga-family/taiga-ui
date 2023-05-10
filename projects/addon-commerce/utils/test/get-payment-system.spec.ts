import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce';

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

        it(`2203`, () => {
            expect(tuiGetPaymentSystem(`2203`)).toBe(`mir`);
        });

        it(`2204`, () => {
            expect(tuiGetPaymentSystem(`2204`)).toBe(`mir`);
        });
    });

    describe(`JCB`, () => {
        it(`3528`, () => {
            expect(tuiGetPaymentSystem(`3528`)).toBe(`jcb`);
        });

        it(`3589`, () => {
            expect(tuiGetPaymentSystem(`3589`)).toBe(`jcb`);
        });
    });

    describe(`American Express`, () => {
        it(`34`, () => {
            expect(tuiGetPaymentSystem(`34`)).toBe(`amex`);
        });

        it(`37`, () => {
            expect(tuiGetPaymentSystem(`37`)).toBe(`amex`);
        });
    });

    describe(`Verve`, () => {
        it(`506099`, () => {
            expect(tuiGetPaymentSystem(`506099`)).toBe(`verve`);
        });

        it(`507865`, () => {
            expect(tuiGetPaymentSystem(`507865`)).toBe(`verve`);
        });

        it(`650002`, () => {
            expect(tuiGetPaymentSystem(`650002`)).toBe(`verve`);
        });
    });

    describe(`RuPay`, () => {
        it(`508`, () => {
            expect(tuiGetPaymentSystem(`508`)).toBe(`rupay`);
        });

        it(`60`, () => {
            expect(tuiGetPaymentSystem(`60`)).toBe(`rupay`);
        });

        it(`81`, () => {
            expect(tuiGetPaymentSystem(`81`)).toBe(`rupay`);
        });
    });

    describe(`Diners Club`, () => {
        it(`36`, () => {
            expect(tuiGetPaymentSystem(`36`)).toBe(`dinersclub`);
        });

        it(`54`, () => {
            expect(tuiGetPaymentSystem(`54`)).toBe(`dinersclub`);
        });
    });

    describe(`Discover`, () => {
        it(`6011`, () => {
            expect(tuiGetPaymentSystem(`6011`)).toBe(`discover`);
        });

        it(`644`, () => {
            expect(tuiGetPaymentSystem(`644`)).toBe(`discover`);
        });

        it(`65`, () => {
            expect(tuiGetPaymentSystem(`65`)).toBe(`discover`);
        });
    });

    describe(`Union Pay`, () => {
        it(`62`, () => {
            expect(tuiGetPaymentSystem(`62`)).toBe(`unionpay`);
        });
    });

    describe(`UzCard`, () => {
        it(`8600`, () => {
            expect(tuiGetPaymentSystem(`8600`)).toBe(`uzcard`);
        });
    });

    describe(`Humo`, () => {
        it(`9860`, () => {
            expect(tuiGetPaymentSystem(`9860`)).toBe(`humo`);
        });
    });
});

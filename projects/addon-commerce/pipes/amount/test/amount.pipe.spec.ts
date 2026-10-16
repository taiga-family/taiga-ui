import {createEnvironmentInjector, EnvironmentInjector, inject} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {
    TUI_CURRENCY_SYMBOLS,
    TuiAmountPipe,
    TuiCurrency,
    TuiCurrencyCode,
    type TuiCurrencyVariants,
} from '@taiga-ui/addon-commerce';

describe('TuiAmountPipe', () => {
    let injector: EnvironmentInjector;

    beforeEach(() => {
        injector = createEnvironmentInjector(
            [
                TuiAmountPipe,
                {
                    provide: TUI_CURRENCY_SYMBOLS,
                    useFactory: () => {
                        const fallback = inject(TUI_CURRENCY_SYMBOLS, {skipSelf: true});

                        return (currency: TuiCurrencyVariants): string | null =>
                            currency === TuiCurrency.YuanRenminbi ||
                            currency === TuiCurrencyCode.YuanRenminbi
                                ? '¥'
                                : fallback(currency);
                    },
                },
            ],
            TestBed.inject(EnvironmentInjector),
        );
    });

    afterEach(() => injector.destroy());

    it('uses custom currency symbols handler for the yuan', () => {
        let result = '';

        injector
            .get(TuiAmountPipe)
            .transform(100, TuiCurrency.YuanRenminbi)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toContain('¥');
    });

    it('uses custom currency symbols handler for the yuan code', () => {
        let result = '';

        injector
            .get(TuiAmountPipe)
            .transform(100, TuiCurrencyCode.YuanRenminbi)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toContain('¥');
    });

    it('falls back to default currency symbols handler', () => {
        let result = '';

        injector
            .get(TuiAmountPipe)
            .transform(100, TuiCurrency.Euro)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toContain('€');
    });
});

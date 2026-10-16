import {createEnvironmentInjector, EnvironmentInjector, inject} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {
    TUI_CURRENCY_SYMBOLS,
    TuiCurrencyPipe,
    type TuiCurrencyVariants,
} from '@taiga-ui/addon-commerce';

describe('TuiCurrencyPipe', () => {
    let injector: EnvironmentInjector;

    beforeEach(() => {
        injector = createEnvironmentInjector(
            [
                TuiCurrencyPipe,
                {
                    provide: TUI_CURRENCY_SYMBOLS,
                    useFactory: () => {
                        const fallback = inject(TUI_CURRENCY_SYMBOLS, {skipSelf: true});

                        return (currency: TuiCurrencyVariants): string | null =>
                            currency === 'USD' ? 'US$' : fallback(currency);
                    },
                },
            ],
            TestBed.inject(EnvironmentInjector),
        );
    });

    afterEach(() => injector.destroy());

    it('uses custom currency symbols handler', () => {
        expect(injector.get(TuiCurrencyPipe).transform('USD')).toBe('US$');
    });

    it('falls back to default currency symbols handler', () => {
        expect(injector.get(TuiCurrencyPipe).transform('EUR')).toBe('€');
    });
});

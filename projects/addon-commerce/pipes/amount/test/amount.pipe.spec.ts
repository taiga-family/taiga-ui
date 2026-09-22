import {createEnvironmentInjector, EnvironmentInjector, inject} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {
    TUI_CURRENCY_SYMBOLS,
    TuiAmountPipe,
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
                            currency === 'USD' ? 'US$' : fallback(currency);
                    },
                },
            ],
            TestBed.inject(EnvironmentInjector),
        );
    });

    afterEach(() => injector.destroy());

    it('uses custom currency symbols handler', () => {
        expect(injector.get(TuiAmountPipe).transform(100, 'USD')).toContain('US$');
    });

    it('falls back to default currency symbols handler', () => {
        expect(injector.get(TuiAmountPipe).transform(100, 'EUR')).toContain('€');
    });
});

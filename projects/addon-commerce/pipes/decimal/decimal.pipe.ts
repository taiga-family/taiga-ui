import type {PipeTransform} from '@angular/core';
import {inject, INJECTOR, Injector, Pipe} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce/pipes/amount';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs';

import {TUI_DECIMAL_OPTIONS} from './decimal.options';

@Pipe({standalone: true, name: 'tuiDecimal'})
export class TuiDecimalPipe implements PipeTransform {
    private readonly injector = inject(INJECTOR);
    private readonly localInjector = Injector.create({
        providers: [{provide: TuiAmountPipe}],
        parent: this.injector,
    });

    private readonly options = inject(TUI_DECIMAL_OPTIONS);
    private readonly format = inject(TUI_NUMBER_FORMAT);
    private readonly amountPipe = this.localInjector.get(TuiAmountPipe);

    public transform(
        value: number,
        currency: TuiCurrencyVariants = this.options.currency,
    ): Observable<string> {
        return this.format.pipe(
            switchMap((format) =>
                this.amountPipe.transform(value, currency).pipe(
                    map((value) => {
                        const decimal = value.split(format.decimalSeparator)[1];

                        return decimal ? `${format.decimalSeparator}${decimal}` : '';
                    }),
                ),
            ),
        );
    }
}

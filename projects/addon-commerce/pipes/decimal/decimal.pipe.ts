import type {PipeTransform} from '@angular/core';
import {inject, INJECTOR, Injector, Pipe} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce/pipes/amount';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs';

@Pipe({standalone: true, name: 'tuiDecimal'})
export class TuiDecimalPipe implements PipeTransform {
    private readonly format = inject(TUI_NUMBER_FORMAT);
    private readonly amountPipe = Injector.create({
        providers: [{provide: TuiAmountPipe}],
        parent: inject(INJECTOR),
    }).get(TuiAmountPipe);

    public transform(
        value: number,
        currency: TuiCurrencyVariants = '',
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

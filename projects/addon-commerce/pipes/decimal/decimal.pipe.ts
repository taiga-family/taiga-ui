import {inject, INJECTOR, Injector, Pipe, type PipeTransform} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce/pipes/amount';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {map, type Observable, switchMap} from 'rxjs';

@Pipe({standalone: true, name: 'tuiDecimal'})
export class TuiDecimalPipe implements PipeTransform {
    private readonly format = toObservable(inject(TUI_NUMBER_FORMAT));
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
                        const [, decimal] = value.split(format.decimalSeparator);

                        return decimal ? `${format.decimalSeparator}${decimal}` : '';
                    }),
                ),
            ),
        );
    }
}

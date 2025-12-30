import {
    computed,
    inject,
    INJECTOR,
    Injector,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce/pipes/amount';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';

@Pipe({name: 'tuiDecimal', pure: false})
export class TuiDecimalPipe implements PipeTransform {
    private readonly format = inject(TUI_NUMBER_FORMAT);
    private readonly amountPipe = Injector.create({
        providers: [{provide: TuiAmountPipe}],
        parent: inject(INJECTOR),
    }).get(TuiAmountPipe);

    private readonly value = signal(NaN);
    private readonly currency = signal<TuiCurrencyVariants>('');
    private readonly formatted = computed(() => {
        const format = this.format();
        const amount = this.amountPipe.transform(this.value(), this.currency());
        const [, decimal] = amount.split(format.decimalSeparator);

        return decimal ? `${format.decimalSeparator}${decimal}` : '';
    });

    public transform(value: number, currency: TuiCurrencyVariants = ''): string {
        untracked(() => {
            this.value.set(value);
            this.currency.set(currency);
        });

        return this.formatted();
    }
}

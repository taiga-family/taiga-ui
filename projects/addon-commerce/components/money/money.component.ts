import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {
    TuiCurrencyVariants,
    TuiMoneySign,
    TuiMoneySignSymbol,
} from '@taiga-ui/addon-commerce/types';
import {CHAR_MINUS, CHAR_PLUS} from '@taiga-ui/cdk';
import {TuiDecimal} from '@taiga-ui/core';

import {TUI_MONEY_OPTIONS, TuiMoneyOptions} from './money.options';
import {tuiFormatSignSymbol} from './utils/format-sign-symbol';

@Component({
    selector: 'tui-money',
    templateUrl: './money.template.html',
    styleUrls: ['./money.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMoneyComponent {
    @Input()
    value = NaN;

    @Input()
    decimal: TuiDecimal = this.options.decimal;

    @Input()
    currency: TuiCurrencyVariants = this.options.currency;

    @Input()
    currencyAlign = this.options.currencyAlign;

    @Input()
    sign: TuiMoneySign = this.options.sign;

    @Input()
    colored = this.options.colored;

    @Input()
    precision = this.options.precision;

    @Input()
    singleColor = this.options.singleColor;

    get signSymbol(): TuiMoneySignSymbol {
        return tuiFormatSignSymbol(this.value, this.sign);
    }

    @HostBinding('class._red')
    get red(): boolean {
        return (
            this.colored &&
            (this.signSymbol === CHAR_MINUS ||
                (this.value < 0 && this.sign !== 'force-positive'))
        );
    }

    @HostBinding('class._green')
    get green(): boolean {
        return (
            this.colored &&
            (this.signSymbol === CHAR_PLUS ||
                (this.value > 0 && this.sign !== 'force-negative'))
        );
    }

    get alignRight(): boolean {
        return this.currencyAlign === 'right';
    }

    @HostBinding('class._inherit-color')
    get inheritColor(): boolean {
        return this.singleColor || (this.value === 0 && this.colored);
    }

    constructor(@Inject(TUI_MONEY_OPTIONS) private readonly options: TuiMoneyOptions) {}
}

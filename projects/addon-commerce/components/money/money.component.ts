import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import type {
    TuiCurrencyVariants,
    TuiMoneySign,
    TuiMoneySignSymbol,
} from '@taiga-ui/addon-commerce/types';
import {CHAR_MINUS, CHAR_PLUS, tuiDefaultProp} from '@taiga-ui/cdk';
import type {TuiDecimal} from '@taiga-ui/core';

import {TUI_MONEY_OPTIONS, TuiMoneyOptions} from './money-options';
import {tuiFormatSignSymbol} from './utils/format-sign-symbol';

@Component({
    selector: `tui-money`,
    templateUrl: `./money.template.html`,
    styleUrls: [`./money.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMoneyComponent {
    @Input()
    @tuiDefaultProp()
    value = NaN;

    @Input()
    @tuiDefaultProp()
    decimal: TuiDecimal = this.options.decimal;

    @Input()
    @tuiDefaultProp()
    currency: TuiCurrencyVariants = this.options.currency;

    @Input()
    @tuiDefaultProp()
    sign: TuiMoneySign = this.options.sign;

    @Input()
    @tuiDefaultProp()
    colored = this.options.colored;

    @Input()
    @tuiDefaultProp()
    precision = this.options.precision;

    @Input()
    @tuiDefaultProp()
    singleColor = this.options.singleColor;

    get signSymbol(): TuiMoneySignSymbol {
        return tuiFormatSignSymbol(this.value, this.sign);
    }

    @HostBinding(`class._red`)
    get red(): boolean {
        return (
            this.colored &&
            (this.signSymbol === CHAR_MINUS ||
                (this.value < 0 && this.sign !== `force-positive`))
        );
    }

    @HostBinding(`class._green`)
    get green(): boolean {
        return (
            this.colored &&
            (this.signSymbol === CHAR_PLUS ||
                (this.value > 0 && this.sign !== `force-negative`))
        );
    }

    @HostBinding(`class._inherit-color`)
    get inheritColor(): boolean {
        return this.singleColor || (this.value === 0 && this.colored);
    }

    constructor(@Inject(TUI_MONEY_OPTIONS) private readonly options: TuiMoneyOptions) {}
}

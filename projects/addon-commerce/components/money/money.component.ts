import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TuiCurrencyVariants, TuiMoneySignT} from '@taiga-ui/addon-commerce/types';
import {CHAR_EN_DASH, tuiDefaultProp} from '@taiga-ui/cdk';
import {
    formatNumber,
    TUI_NUMBER_FORMAT,
    TuiDecimalT,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';

import {TUI_MONEY_OPTIONS, TuiMoneyOptions} from './money-options';

@Component({
    selector: 'tui-money',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './money.template.html',
    styleUrls: ['./money.style.less'],
})
export class TuiMoneyComponent {
    @Input()
    @tuiDefaultProp()
    value = NaN;

    @Input()
    @tuiDefaultProp()
    decimal: TuiDecimalT = this.options.decimal;

    @Input()
    @tuiDefaultProp()
    currency: TuiCurrencyVariants = this.options.currency;

    @Input()
    @tuiDefaultProp()
    sign: TuiMoneySignT = this.options.sign;

    @Input()
    @tuiDefaultProp()
    colored = this.options.colored;

    @Input()
    @tuiDefaultProp()
    precision = this.options.precision;

    @Input()
    @tuiDefaultProp()
    singleColor = this.options.singleColor;

    get integerPart(): string {
        return formatNumber(
            Math.floor(Math.abs(this.value)),
            null,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );
    }

    get fractionPart(): string {
        const {decimal, value} = this;
        const fraction = value.toFixed(this.precision).split('.')[1];

        return decimal === 'never' ||
            (parseInt(fraction, 10) === 0 && decimal !== 'always')
            ? ''
            : this.numberFormat.decimalSeparator + fraction;
    }

    get signSymbol(): '' | typeof CHAR_EN_DASH | '+' {
        const {sign, value} = this;

        if (sign === 'never' || !value || (sign === 'negative-only' && value > 0)) {
            return '';
        }

        if (sign === 'force-negative' || (value < 0 && sign !== 'force-positive')) {
            return CHAR_EN_DASH;
        }

        return '+';
    }

    @HostBinding('class._red')
    get red(): boolean {
        return (
            this.colored &&
            (this.signSymbol === CHAR_EN_DASH ||
                (this.value < 0 && this.sign !== 'force-positive'))
        );
    }

    @HostBinding('class._green')
    get green(): boolean {
        return (
            this.colored &&
            (this.signSymbol === '+' ||
                (this.value > 0 && this.sign !== 'force-negative'))
        );
    }

    @HostBinding('class._inherit-color')
    get inheritColor(): boolean {
        return this.singleColor || (this.value === 0 && this.colored);
    }

    constructor(
        @Inject(TUI_NUMBER_FORMAT)
        private readonly numberFormat: TuiNumberFormatSettings,
        @Inject(TUI_MONEY_OPTIONS)
        private readonly options: TuiMoneyOptions,
    ) {}
}

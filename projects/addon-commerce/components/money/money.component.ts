import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiCurrency} from '@taiga-ui/addon-commerce/enums';
import {TuiCurrencyVariants, TuiMoneySignT} from '@taiga-ui/addon-commerce/types';
import {CHAR_EN_DASH, tuiDefaultProp} from '@taiga-ui/cdk';
import {formatNumber, TuiDecimalT} from '@taiga-ui/core';

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
    decimal: TuiDecimalT = 'not-zero';

    @Input()
    @tuiDefaultProp()
    currency: TuiCurrencyVariants = TuiCurrency.Ruble;

    @Input()
    @tuiDefaultProp()
    sign: TuiMoneySignT = 'negative-only';

    @Input()
    @tuiDefaultProp()
    colored = false;

    @Input()
    @tuiDefaultProp()
    precision = 2;

    @Input()
    @tuiDefaultProp()
    singleColor = false;

    get integerPart(): string {
        return formatNumber(Math.floor(Math.abs(this.value)));
    }

    get fractionPart(): string {
        const {decimal, value} = this;
        const fraction = value.toFixed(this.precision).split('.')[1];

        return decimal === 'never' ||
            (parseInt(fraction, 10) === 0 && decimal !== 'always')
            ? ''
            : ',' + fraction;
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
}

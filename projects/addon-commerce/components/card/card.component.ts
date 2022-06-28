import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiPaymentSystem, TuiPaymentSystemT} from '@taiga-ui/addon-commerce/enums';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

/**
 * @deprecated: use {@link tuiCardNumberAssertion} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function cardNumberAssertion({length}: string): boolean {
    return !length || length === 4;
}

export const tuiCardNumberAssertion = cardNumberAssertion;

export const cardNumberAssertionMessage = 'cardNumber should contain 4 symbols';

const icons = {
    [TuiPaymentSystem.Mir]: 'tuiIconMirMono',
    [TuiPaymentSystem.Visa]: 'tuiIconVisaMono',
    [TuiPaymentSystem.Electron]: 'tuiIconElectronMono',
    [TuiPaymentSystem.Mastercard]: 'tuiIconMastercard',
    [TuiPaymentSystem.Maestro]: 'tuiIconMaestro',
};

@Component({
    selector: 'tui-card',
    templateUrl: 'card.template.html',
    styleUrls: ['./card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCardComponent {
    @Input()
    @HostBinding('class._active')
    @tuiDefaultProp()
    active = false;

    @Input()
    @tuiDefaultProp()
    brandLogo = '';

    @Input()
    @tuiDefaultProp(cardNumberAssertion, cardNumberAssertionMessage)
    cardNumber = '';

    @Input()
    @tuiDefaultProp()
    paymentSystem: TuiPaymentSystemT | TuiPaymentSystem | null = null;

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeS = 'm';

    get hasBrandLogo(): boolean {
        return !!this.brandLogo && this.size === 'm';
    }

    get paymentSystemLogo(): string {
        return this.paymentSystem ? icons[this.paymentSystem] : '';
    }
}

import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/enums';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

export function cardNumberAssertion(cardNumber: string): boolean {
    return cardNumber === '' || cardNumber.length === 4;
}

export const cardNumberAssertionMessage = 'cardNumber should contain 4 symbols';

const icons = {
    [TuiPaymentSystem.Mir]: 'tuiIconMir',
    [TuiPaymentSystem.Visa]: 'tuiIconVisa',
    [TuiPaymentSystem.Electron]: 'tuiIconVisa',
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
    paymentSystem: TuiPaymentSystem | null = null;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS = 'm';

    get hasBrandLogo(): boolean {
        return !!this.brandLogo && this.size === 'm';
    }

    get paymentSystemLogo(): string {
        return this.paymentSystem ? icons[this.paymentSystem] : '';
    }
}

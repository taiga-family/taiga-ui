import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/utils';
import {TuiSizeS} from '@taiga-ui/core';

const icons: Record<TuiPaymentSystem, string> = {
    ...TUI_PAYMENT_SYSTEM_ICONS,
    mir: 'tuiIconMirMono',
    visa: 'tuiIconVisaMono',
    electron: 'tuiIconElectronMono',
};

@Component({
    selector: 'tui-card',
    templateUrl: './card.template.html',
    styleUrls: ['./card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCardComponent {
    @Input()
    @HostBinding('class._active')
    active = false;

    @Input()
    brandLogo = '';

    @Input()
    cardNumber = '';

    @Input()
    paymentSystem: TuiPaymentSystem | null = null;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeS = 'm';

    get hasBrandLogo(): boolean {
        return !!this.brandLogo && this.size === 'm';
    }

    get paymentSystemLogo(): string {
        return this.paymentSystem ? icons[this.paymentSystem] : '';
    }
}

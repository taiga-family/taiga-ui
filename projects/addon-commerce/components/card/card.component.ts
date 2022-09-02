import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';

const icons: Record<TuiPaymentSystem, string> = {
    mir: `tuiIconMirMono`,
    visa: `tuiIconVisaMono`,
    electron: `tuiIconElectronMono`,
    mastercard: `tuiIconMastercard`,
    maestro: `tuiIconMaestro`,
};

@Component({
    selector: `tui-card`,
    templateUrl: `card.template.html`,
    styleUrls: [`./card.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCardComponent {
    @Input()
    @HostBinding(`class._active`)
    @tuiDefaultProp()
    active = false;

    @Input()
    @tuiDefaultProp()
    brandLogo = ``;

    @Input()
    @tuiDefaultProp(
        ({length}: string) => !length || length === 4,
        `cardNumber should contain 4 symbols`,
    )
    cardNumber = ``;

    @Input()
    @tuiDefaultProp()
    paymentSystem: TuiPaymentSystem | null = null;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS = `m`;

    get hasBrandLogo(): boolean {
        return !!this.brandLogo && this.size === `m`;
    }

    get paymentSystemLogo(): string {
        return this.paymentSystem ? icons[this.paymentSystem] : ``;
    }
}

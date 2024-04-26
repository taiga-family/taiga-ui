import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/utils';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER, TuiIconComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-thumbnail-card',
    imports: [TuiIconComponent, NgIf],
    templateUrl: './thumbnail-card.template.html',
    styleUrls: ['./thumbnail-card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiThumbnailCardComponent {
    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeS = 'm';

    @Input()
    public paymentSystem: TuiPaymentSystem | null = null;

    @Input()
    public iconLeft = '';

    @Input()
    public iconRight = '';

    protected readonly paymentIcons = inject(TUI_PAYMENT_SYSTEM_ICONS);
    protected readonly resolver = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);

    // TODO: Revisit this approach in 4.0 when icons are moved away from InputCard options
    protected get isMono(): boolean {
        switch (this.paymentSystem) {
            case 'mir':
            case 'visa':
            case 'electron':
                return true;
            default:
                return false;
        }
    }
}

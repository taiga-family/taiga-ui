import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/tokens';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core/components/icon';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-thumbnail-card',
    imports: [TuiIcon, NgIf, TuiIconPipe],
    templateUrl: './thumbnail-card.template.html',
    styleUrls: ['./thumbnail-card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiThumbnailCard {
    protected readonly paymentIcons = inject(TUI_PAYMENT_SYSTEM_ICONS);

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeS = 'm';

    @Input()
    public paymentSystem: TuiPaymentSystem | null = null;

    @Input()
    public iconStart = '';

    @Input()
    public iconEnd = '';

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

import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {
    TUI_INPUT_CARD_OPTIONS,
    TuiInputCardOptions,
} from '@taiga-ui/addon-commerce/components/input-card';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-thumbnail-card',
    templateUrl: './thumbnail-card.template.html',
    styleUrls: ['./thumbnail-card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiThumbnailCardComponent {
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

    constructor(
        @Inject(TUI_INPUT_CARD_OPTIONS) private readonly options: TuiInputCardOptions,
    ) {}

    get hasBrandLogo(): boolean {
        return !!this.brandLogo && this.size === 'm';
    }

    get paymentSystemLogo(): string {
        return this.paymentSystem ? this.options.icons[this.paymentSystem] : '';
    }
}

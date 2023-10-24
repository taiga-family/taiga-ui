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
    TuiPaymentSystem,
} from '@taiga-ui/addon-commerce';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-thumbnail-card',
    templateUrl: './thumbnail-card.template.html',
    styleUrls: ['./thumbnail-card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiThumbnailCardComponent {
    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeS = 'm';

    @Input()
    paymentSystem: TuiPaymentSystem | null = null;

    @Input()
    iconLeft = '';

    @Input()
    iconRight = '';

    constructor(@Inject(TUI_INPUT_CARD_OPTIONS) readonly options: TuiInputCardOptions) {}
}

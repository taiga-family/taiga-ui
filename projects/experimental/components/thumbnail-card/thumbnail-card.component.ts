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
import {TuiStringHandler} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

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

    constructor(
        @Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>,
        @Inject(TUI_INPUT_CARD_OPTIONS) readonly options: TuiInputCardOptions,
    ) {}

    // TODO: Revisit this approach in 4.0 when icons are moved away from InputCard options
    get isMono(): boolean {
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

import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {TUI_INPUT_CARD_OPTIONS, TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER, TuiSizeL, TuiSizeS} from '@taiga-ui/core';

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

    readonly options = inject(TUI_INPUT_CARD_OPTIONS);
    readonly resolver = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);

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

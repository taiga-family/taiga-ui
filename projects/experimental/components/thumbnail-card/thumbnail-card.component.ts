import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TUI_INPUT_CARD_OPTIONS} from '@taiga-ui/addon-commerce';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER} from '@taiga-ui/core';

@Component({
    selector: 'tui-thumbnail-card',
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

    protected readonly options = inject(TUI_INPUT_CARD_OPTIONS);
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

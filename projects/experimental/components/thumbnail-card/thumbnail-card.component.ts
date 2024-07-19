import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

import {
    TUI_THUMBNAIL_CARD_OPTIONS,
    TuiThumbnailCardOptions,
} from './thumbnail-card.options';

@Component({
    selector: 'tui-thumbnail-card',
    templateUrl: './thumbnail-card.template.html',
    styleUrls: ['./thumbnail-card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiThumbnailCardComponent {
    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeS = this.options.size;

    @Input()
    paymentSystem: TuiPaymentSystem | null = null;

    @Input()
    iconLeft = '';

    @Input()
    iconRight = '';

    @Input()
    monoHandler: TuiBooleanHandler<TuiPaymentSystem> = this.options.monoHandler;

    constructor(
        @Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>,
        @Inject(TUI_THUMBNAIL_CARD_OPTIONS) readonly options: TuiThumbnailCardOptions,
    ) {}
}

import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import type {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
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
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiThumbnailCardComponent {
    @Input()
    size: TuiSizeL | TuiSizeXS = this.options.size;

    @Input()
    paymentSystem: TuiPaymentSystem | null = null;

    @Input('iconLeft')
    iconStart = '';

    @Input('iconRight')
    iconEnd = '';

    @Input()
    monoHandler: TuiBooleanHandler<TuiPaymentSystem> = this.options.monoHandler;

    constructor(
        @Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>,
        @Inject(TUI_THUMBNAIL_CARD_OPTIONS) readonly options: TuiThumbnailCardOptions,
    ) {}
}

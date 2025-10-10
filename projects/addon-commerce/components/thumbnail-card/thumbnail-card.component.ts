import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {type TuiSizeL, type TuiSizeXS} from '@taiga-ui/core/types';

import {TUI_THUMBNAIL_CARD_OPTIONS} from './thumbnail-card.options';

@Component({
    selector: 'tui-thumbnail-card',
    imports: [TuiIcon],
    templateUrl: './thumbnail-card.template.html',
    styleUrl: './thumbnail-card.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiThumbnailCard {
    protected readonly options = inject(TUI_THUMBNAIL_CARD_OPTIONS);

    @Input()
    public size: TuiSizeL | TuiSizeXS = this.options.size;

    @Input()
    public paymentSystem: TuiPaymentSystem | null = null;

    @Input()
    public iconStart = '';

    @Input()
    public iconEnd = '';
}

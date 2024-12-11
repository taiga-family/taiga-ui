import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core/components/icon';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';

import {TUI_THUMBNAIL_CARD_OPTIONS} from './thumbnail-card.options';

@Component({
    standalone: true,
    selector: 'tui-thumbnail-card',
    imports: [NgIf, TuiIcon, TuiIconPipe],
    templateUrl: './thumbnail-card.template.html',
    styleUrls: ['./thumbnail-card.style.less'],
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

    @Input()
    public monoHandler: TuiBooleanHandler<TuiPaymentSystem> = this.options.monoHandler;
}

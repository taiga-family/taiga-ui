import {inject} from '@angular/core';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/tokens';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiThumbnailCardOptions {
    readonly size: TuiSizeL | TuiSizeS;
    readonly icons: Record<TuiPaymentSystem, string>;
    readonly monoHandler: TuiBooleanHandler<TuiPaymentSystem>;
}

export const TUI_THUMBNAIL_CARD_OPTIONS =
    tuiCreateTokenFromFactory<TuiThumbnailCardOptions>(() => ({
        icons: inject(TUI_PAYMENT_SYSTEM_ICONS),
        size: 'm',
        monoHandler: (ps) => ps === 'mir' || ps === 'visa' || ps === 'electron',
    }));

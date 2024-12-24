import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {tuiCreateToken} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';

export interface TuiThumbnailCardOptions {
    readonly size: TuiSizeL | TuiSizeXS;
    readonly icons: Record<TuiPaymentSystem, string>;
    readonly monoHandler: TuiBooleanHandler<TuiPaymentSystem>;
}

export const TUI_THUMBNAIL_CARD_OPTIONS = tuiCreateToken<TuiThumbnailCardOptions>({
    icons: TUI_PAYMENT_SYSTEM_ICONS,
    size: 'm',
    monoHandler: ps => ps === 'mir' || ps === 'visa' || ps === 'electron',
});

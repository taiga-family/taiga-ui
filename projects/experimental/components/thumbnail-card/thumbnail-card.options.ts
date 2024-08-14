import {TUI_PAYMENT_SYSTEM_ICONS, TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TuiBooleanHandler, tuiCreateToken} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

export interface TuiThumbnailCardOptions {
    readonly size: TuiSizeL | TuiSizeS;
    readonly icons: Record<TuiPaymentSystem, string>;
    readonly monoHandler: TuiBooleanHandler<TuiPaymentSystem>;
}

export const TUI_THUMBNAIL_CARD_OPTIONS = tuiCreateToken<TuiThumbnailCardOptions>({
    icons: TUI_PAYMENT_SYSTEM_ICONS,
    size: 'm',
    monoHandler: ps => ps === 'mir' || ps === 'visa' || ps === 'electron',
});

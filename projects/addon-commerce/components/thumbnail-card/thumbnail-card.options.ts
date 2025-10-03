import {inject, InjectionToken} from '@angular/core';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/tokens';
import {type TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {type TuiSizeL, type TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiThumbnailCardOptions {
    readonly size: TuiSizeL | TuiSizeXS;
    readonly icons: Record<TuiPaymentSystem, string>;
}

export const TUI_THUMBNAIL_CARD_OPTIONS = new InjectionToken<TuiThumbnailCardOptions>(
    ngDevMode ? 'TUI_THUMBNAIL_CARD_OPTIONS' : '',
    {
        factory: () => ({
            icons: inject(TUI_PAYMENT_SYSTEM_ICONS),
            size: 'm',
        }),
    },
);

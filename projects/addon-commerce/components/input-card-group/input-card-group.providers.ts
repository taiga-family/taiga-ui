import {computed, inject, InjectionToken, type Signal} from '@angular/core';
import {
    TUI_CARD_CVC_TEXTS,
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {TUI_BREAKPOINT} from '@taiga-ui/core/tokens';

import {TuiInputCardGroupDirective} from './input-card-group.directive';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly cvcText: string;
    readonly expiryText: string;
}

export const TUI_INPUT_CARD_GROUP_TEXTS = new InjectionToken<Signal<TuiCardGroupedTexts>>(
    ngDevMode ? 'TUI_INPUT_CARD_GROUP_TEXTS' : '',
);

export const TUI_INPUT_CARD_GROUP_TEXTS_PROVIDER = {
    provide: TUI_INPUT_CARD_GROUP_TEXTS,
    useFactory: () => {
        const cardGroupTexts = inject(TUI_INPUT_CARD_GROUP_TEXTS, {
            skipSelf: true,
            optional: true,
        });
        const breakpoint = inject(TUI_BREAKPOINT);
        const directive = inject(TuiInputCardGroupDirective);
        const compact = computed(() => directive.compact() || breakpoint() === 'mobile');
        const cardNumber = inject(TUI_CARD_NUMBER_TEXTS);
        const expiry = inject(TUI_CARD_EXPIRY_TEXTS);
        const cvcTexts = inject(TUI_CARD_CVC_TEXTS);

        return computed(
            () =>
                cardGroupTexts?.() ?? {
                    cardNumberText: cardNumber()[Number(!compact())] ?? '',
                    expiryText: expiry()[Number(!compact())] ?? '',
                    cvcText: cvcTexts()[Number(!compact())] ?? '',
                },
        );
    },
};

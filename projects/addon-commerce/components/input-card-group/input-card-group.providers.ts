import {inject, InjectionToken} from '@angular/core';
import {
    TUI_CARD_CVC_TEXTS,
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {combineLatest, map, type Observable} from 'rxjs';

import {TuiInputCardGroupDirective} from './input-card-group.directive';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly cvcText: string;
    readonly expiryText: string;
}

export const TUI_INPUT_CARD_GROUP_TEXTS = new InjectionToken<
    Observable<TuiCardGroupedTexts>
>(ngDevMode ? 'TUI_INPUT_CARD_GROUP_TEXTS' : '');

export const TUI_INPUT_CARD_GROUP_TEXTS_PROVIDER = {
    provide: TUI_INPUT_CARD_GROUP_TEXTS,
    useFactory: () =>
        inject(TUI_INPUT_CARD_GROUP_TEXTS, {skipSelf: true, optional: true}) ??
        combineLatest([
            inject(TuiInputCardGroupDirective).compact$,
            inject(TUI_CARD_NUMBER_TEXTS),
            inject(TUI_CARD_EXPIRY_TEXTS),
            inject(TUI_CARD_CVC_TEXTS),
        ]).pipe(
            map(([compact, cardNumber, expiry, cvcTexts]) => ({
                cardNumberText: cardNumber[Number(!compact)] ?? '',
                expiryText: expiry[Number(!compact)] ?? '',
                cvcText: cvcTexts[Number(!compact)] ?? '',
            })),
        ),
};

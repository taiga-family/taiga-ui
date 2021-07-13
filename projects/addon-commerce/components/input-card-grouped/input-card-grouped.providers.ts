import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {typedFromEvent} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';
import {map, startWith, withLatestFrom} from 'rxjs/operators';
import {MEDIA} from '../../../core';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly expiryText: string;
    readonly cvcText: string;
}

export const TUI_CARD_CVC = new InjectionToken<Observable<[string, string]>>(
    'Card CVC number text',
    {
        factory: () => of(['CVC', 'CVC/CVV']),
    },
);

export const TUI_INPUT_CARD_GROUPED_TEXTS = new InjectionToken('InputCardGrouped texts', {
    factory: () =>
        inputGroupedTextsFactory(
            inject(WINDOW),
            inject(TUI_CARD_NUMBER_TEXTS),
            inject(TUI_CARD_EXPIRY_TEXTS),
            inject(TUI_CARD_CVC),
        ),
});

export function inputGroupedTextsFactory(
    windowRef: Window,
    cardNumberTexts: Observable<[string, string]>,
    expiryTexts: Observable<[string, string]>,
    cvcTexts: Observable<[string, string]>,
): Observable<TuiCardGroupedTexts> {
    const media = windowRef.matchMedia(
        `screen and (min-width: ${(MEDIA.tablet - 1) / 16}em)`,
    );

    return typedFromEvent(media, 'change').pipe(
        startWith(null),
        map(() => Number(media.matches)),
        withLatestFrom(cardNumberTexts, expiryTexts, cvcTexts),
        map(([isMobile, cardNumber, expiry, cvcTexts]) => ({
            cardNumberText: cardNumber[isMobile],
            expiryText: expiry[isMobile],
            cvcText: cvcTexts[isMobile],
        })),
    );
}

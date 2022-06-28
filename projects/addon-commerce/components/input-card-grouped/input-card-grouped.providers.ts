import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    TUI_CARD_CVC_TEXTS,
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {typedFromEvent} from '@taiga-ui/cdk';
import {TuiMedia} from '@taiga-ui/core/interfaces';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {combineLatest, Observable, of} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly expiryText: string;
    readonly cvcText: string;
}

export const TUI_INPUT_CARD_GROUPED_TEXTS = new InjectionToken<
    Observable<TuiCardGroupedTexts>
>('InputCardGrouped texts', {
    factory: () =>
        inputGroupedTextsFactory(
            inject(WINDOW),
            inject(TUI_CARD_NUMBER_TEXTS),
            inject(TUI_CARD_EXPIRY_TEXTS),
            inject(TUI_CARD_CVC_TEXTS),
            inject(TUI_MEDIA),
        ),
});

/**
 * @deprecated: use {@link tuiInputGroupedTextsFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function inputGroupedTextsFactory(
    windowRef: Window,
    cardNumberTexts: Observable<[string, string]>,
    expiryTexts: Observable<[string, string]>,
    cvcTexts: Observable<[string, string]>,
    {desktopSmall}: TuiMedia,
): Observable<TuiCardGroupedTexts> {
    const media = windowRef.matchMedia(
        `screen and (min-width: ${(desktopSmall - 1) / 16}em)`,
    );

    return typedFromEvent(media, 'change').pipe(
        startWith(null),
        switchMap(() =>
            combineLatest([
                of(Number(media.matches)),
                cardNumberTexts,
                expiryTexts,
                cvcTexts,
            ]),
        ),
        map(([index, cardNumber, expiry, cvcTexts]) => ({
            cardNumberText: cardNumber[index],
            expiryText: expiry[index],
            cvcText: cvcTexts[index],
        })),
    );
}

export const tuiInputGroupedTextsFactory = inputGroupedTextsFactory;

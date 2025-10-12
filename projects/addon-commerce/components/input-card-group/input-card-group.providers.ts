import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {
    TUI_CARD_CVC_TEXTS,
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {combineLatest, map, type Observable, of, startWith, switchMap} from 'rxjs';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly cvcText: string;
    readonly expiryText: string;
}

/**
 * InputCardGroup texts
 */
export const TUI_INPUT_CARD_GROUP_TEXTS = new InjectionToken<
    Observable<TuiCardGroupedTexts>
>(ngDevMode ? 'TUI_INPUT_CARD_GROUP_TEXTS' : '', {
    factory: () => {
        const win = inject(WA_WINDOW);
        const cardNumberTexts = inject(TUI_CARD_NUMBER_TEXTS);
        const expiryTexts = inject(TUI_CARD_EXPIRY_TEXTS);
        const cvcTexts = inject(TUI_CARD_CVC_TEXTS);
        const {mobile} = inject(TUI_MEDIA);
        const media = win.matchMedia(`screen and (min-width: ${(mobile - 1) / 16}em)`);

        return tuiTypedFromEvent(media, 'change').pipe(
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
                cardNumberText: cardNumber[index] ?? '',
                expiryText: expiry[index] ?? '',
                cvcText: cvcTexts[index] ?? '',
            })),
        );
    },
});

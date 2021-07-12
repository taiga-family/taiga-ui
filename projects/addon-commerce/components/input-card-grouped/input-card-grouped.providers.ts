import {InjectionToken, Provider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {typedFromEvent} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';
import {map, startWith, withLatestFrom} from 'rxjs/operators';

const TUI_MOBILE_MEDIA = 'screen and (max-width: 37.4375rem)';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly expiryText: string;
    readonly cvcText: string;
}

export const TUI_CARD_CVC = new InjectionToken('Card CVC number text', {
    factory: () => of(['CVC', 'CVC/CVV']),
});

export const TUI_INPUT_CARD_GROUPED_TEXTS = new InjectionToken('InputCardGrouped texts');

export const TUI_INPUT_CARD_GROUPED_PROVIDERS: Provider[] = [
    {
        provide: TUI_INPUT_CARD_GROUPED_TEXTS,
        deps: [WINDOW, TUI_CARD_NUMBER_TEXTS, TUI_CARD_EXPIRY_TEXTS, TUI_CARD_CVC],
        useFactory: inputGroupedTextsFactory,
    },
];

export function inputGroupedTextsFactory(
    windowRef: Window,
    cardNumberTexts: Observable<[string, string]>,
    expiryTexts: Observable<[string, string]>,
    cvcTexts: Observable<[string, string]>,
): Observable<TuiCardGroupedTexts> {
    return typedFromEvent(windowRef.matchMedia(TUI_MOBILE_MEDIA), 'change').pipe(
        map(({currentTarget}) => currentTarget.matches),
        startWith(windowRef.matchMedia(TUI_MOBILE_MEDIA).matches),
        withLatestFrom(cardNumberTexts, expiryTexts, cvcTexts),
        map(([isMobile, cardNumber, expiry, cvcTexts]) =>
            isMobile
                ? {
                      cardNumberText: cardNumber[0],
                      expiryText: expiry[0],
                      cvcText: cvcTexts[0],
                  }
                : {
                      cardNumberText: cardNumber[1],
                      expiryText: expiry[1],
                      cvcText: cvcTexts[1],
                  },
        ),
    );
}

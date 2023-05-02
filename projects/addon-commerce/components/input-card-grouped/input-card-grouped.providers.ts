import {inject, InjectionToken, ValueProvider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    TUI_INPUT_CARD_DEFAULT_OPTIONS,
    TuiInputCardOptions,
} from '@taiga-ui/addon-commerce/components/input-card';
import {tuiDefaultCardValidator} from '@taiga-ui/addon-commerce/constants';
import {
    TUI_CARD_CVC_TEXTS,
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {TuiBooleanHandler, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TUI_MEDIA} from '@taiga-ui/core';
import {combineLatest, Observable, of} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly expiryText: string;
    readonly cvcText: string;
}

/**
 * InputCardGrouped texts
 */
export const TUI_INPUT_CARD_GROUPED_TEXTS = new InjectionToken<
    Observable<TuiCardGroupedTexts>
>(`[TUI_INPUT_CARD_GROUPED_TEXTS]`, {
    factory: () => {
        const win = inject(WINDOW);
        const cardNumberTexts = inject(TUI_CARD_NUMBER_TEXTS);
        const expiryTexts = inject(TUI_CARD_EXPIRY_TEXTS);
        const cvcTexts = inject(TUI_CARD_CVC_TEXTS);
        const {desktopSmall} = inject(TUI_MEDIA);

        const media = win.matchMedia(
            `screen and (min-width: ${(desktopSmall - 1) / 16}em)`,
        );

        return tuiTypedFromEvent(media, `change`).pipe(
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
    },
});

export interface TuiInputCardGroupedOptions extends TuiInputCardOptions {
    readonly cardValidator: TuiBooleanHandler<string>;
    readonly exampleText: string;
    readonly exampleTextCVC: string;
}

export const TUI_INPUT_CARD_GROUPED_DEFAULT_OPTIONS: TuiInputCardGroupedOptions = {
    ...TUI_INPUT_CARD_DEFAULT_OPTIONS,
    cardValidator: tuiDefaultCardValidator,
    exampleText: `0000 0000 0000 0000`,
    exampleTextCVC: `000`,
};

export const TUI_INPUT_CARD_GROUPED_OPTIONS =
    new InjectionToken<TuiInputCardGroupedOptions>(`[TUI_INPUT_CARD_GROUPED_OPTIONS]`, {
        factory: () => TUI_INPUT_CARD_GROUPED_DEFAULT_OPTIONS,
    });

export const tuiInputCardGroupedOptionsProvider: (
    options: Partial<TuiInputCardGroupedOptions>,
) => ValueProvider = (options: Partial<TuiInputCardGroupedOptions>) => ({
    provide: TUI_INPUT_CARD_GROUPED_OPTIONS,
    useValue: {...TUI_INPUT_CARD_GROUPED_DEFAULT_OPTIONS, ...options},
});

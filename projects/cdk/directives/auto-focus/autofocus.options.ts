import {
    ElementRef,
    InjectionToken,
    NgZone,
    Optional,
    Provider,
    Renderer2,
    Self,
    Type,
} from '@angular/core';
import {ANIMATION_FRAME, WINDOW} from '@ng-web-apis/common';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR, TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {Observable} from 'rxjs';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiDefaultAutofocusHandler} from './handlers/default.handler';
// eslint-disable-next-line import/no-cycle
import {TuiIosAutofocusHandler} from './handlers/ios.handler';

export interface TuiAutofocusHandler {
    setFocus(): void;
}

export const TUI_AUTOFOCUS_HANDLER = new InjectionToken<TuiAutofocusHandler>(
    `[TUI_AUTOFOCUS_HANDLER]`,
);

export const TUI_AUTOFOCUS_CUSTOM_HANDLER = new InjectionToken<TuiAutofocusHandler>(
    `[TUI_AUTOFOCUS_CUSTOM_HANDLER]`,
);

export function tuiAsAutofocusHandler(useExisting: Type<TuiAutofocusHandler>): Provider {
    return {
        provide: TUI_AUTOFOCUS_CUSTOM_HANDLER,
        useExisting,
    };
}

export const TUI_AUTOFOCUS_PROVIDERS = [
    {
        provide: TUI_AUTOFOCUS_HANDLER,
        useFactory: (
            existingHandler: TuiAutofocusHandler | null,
            focusable: TuiFocusableElementAccessor | null,
            el: ElementRef<HTMLElement>,
            animationFrame$: Observable<number>,
            renderer: Renderer2,
            ngZone: NgZone,
            win: Window,
            isIos: boolean,
        ) => {
            if (existingHandler) {
                return existingHandler;
            }

            return isIos
                ? new TuiIosAutofocusHandler(focusable, el, renderer, ngZone, win)
                : new TuiDefaultAutofocusHandler(focusable, el, animationFrame$);
        },
        deps: [
            [new Optional(), new Self(), TUI_AUTOFOCUS_CUSTOM_HANDLER],
            [new Optional(), new Self(), TUI_FOCUSABLE_ITEM_ACCESSOR],
            ElementRef,
            ANIMATION_FRAME,
            Renderer2,
            NgZone,
            WINDOW,
            TUI_IS_IOS,
        ],
    },
];

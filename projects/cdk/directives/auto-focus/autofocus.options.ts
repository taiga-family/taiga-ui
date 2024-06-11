import type {Provider} from '@angular/core';
import {ElementRef, InjectionToken, NgZone, Renderer2} from '@angular/core';
import {ANIMATION_FRAME, WINDOW} from '@ng-web-apis/common';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';

import {TuiDefaultAutofocusHandler} from './handlers/default.handler';
import {TuiIosAutofocusHandler} from './handlers/ios.handler';

export interface TuiAutofocusHandler {
    setFocus(): void;
}

export interface TuiAutofocusOptions {
    readonly delay: number;
}

export const TUI_AUTOFOCUS_DEFAULT_OPTIONS: TuiAutofocusOptions = {
    delay: NaN, // NaN = no delay/sync
};

export const TUI_AUTOFOCUS_OPTIONS = tuiCreateToken(TUI_AUTOFOCUS_DEFAULT_OPTIONS);

export function tuiAutoFocusOptionsProvider(
    options: Partial<TuiAutofocusOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_AUTOFOCUS_OPTIONS,
        options,
        TUI_AUTOFOCUS_DEFAULT_OPTIONS,
    );
}

export const TUI_AUTOFOCUS_HANDLER = new InjectionToken<TuiAutofocusHandler>(
    '[TUI_AUTOFOCUS_HANDLER]',
);

export const TUI_AUTOFOCUS_PROVIDERS = [
    {
        provide: TUI_AUTOFOCUS_HANDLER,
        useFactory: (
            el: ElementRef<HTMLElement>,
            animationFrame$: Observable<number>,
            renderer: Renderer2,
            zone: NgZone,
            win: Window,
            isIos: boolean,
        ) =>
            isIos
                ? new TuiIosAutofocusHandler(el, renderer, zone, win)
                : new TuiDefaultAutofocusHandler(el, animationFrame$),
        deps: [ElementRef, ANIMATION_FRAME, Renderer2, NgZone, WINDOW, TUI_IS_IOS],
    },
];

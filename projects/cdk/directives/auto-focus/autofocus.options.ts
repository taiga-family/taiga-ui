import {ElementRef, InjectionToken, NgZone, Renderer2} from '@angular/core';
import {WA_ANIMATION_FRAME, WA_WINDOW} from '@ng-web-apis/common';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type Observable} from 'rxjs';

import {TuiDefaultAutofocusHandler} from './handlers/default.handler';
import {TuiIosAutofocusHandler} from './handlers/ios.handler';

export interface TuiAutofocusHandler {
    setFocus(): void;
}

export interface TuiAutofocusOptions {
    readonly delay: number;
    readonly query: string;
    readonly preventScroll: boolean;
}

export const [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] =
    tuiCreateOptions<TuiAutofocusOptions>({
        delay: NaN, // NaN = no delay/sync
        query: 'input, textarea, select, [contenteditable]',
        preventScroll: false,
    });

export const TUI_AUTOFOCUS_HANDLER = new InjectionToken<TuiAutofocusHandler>(
    ngDevMode ? 'TUI_AUTOFOCUS_HANDLER' : '',
);

export const TUI_AUTOFOCUS_PROVIDERS = [
    {
        provide: TUI_AUTOFOCUS_HANDLER,
        deps: [
            ElementRef,
            WA_ANIMATION_FRAME,
            Renderer2,
            NgZone,
            WA_WINDOW,
            TUI_IS_IOS,
            TUI_AUTOFOCUS_OPTIONS,
        ],
        // eslint-disable-next-line @typescript-eslint/max-params,max-params
        useFactory: (
            el: ElementRef<HTMLElement>,
            animationFrame$: Observable<number>,
            renderer: Renderer2,
            zone: NgZone,
            win: Window,
            isIos: boolean,
            options: TuiAutofocusOptions,
        ) =>
            isIos
                ? new TuiIosAutofocusHandler(el, renderer, zone, win, options)
                : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options),
    },
];

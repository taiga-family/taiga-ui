import {
    ElementRef,
    InjectionToken,
    NgZone,
    Optional,
    Renderer2,
    Self,
} from '@angular/core';
import {ANIMATION_FRAME, WINDOW} from '@ng-web-apis/common';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR, TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {Observable} from 'rxjs';

import {TuiDefaultAutofocusHandler} from './handlers/default.handler';
import {TuiIosAutofocusHandler} from './handlers/ios.handler';

export interface TuiAutofocusHandler {
    setFocus(): void;
}

export const TUI_AUTOFOCUS_HANDLER = new InjectionToken<TuiAutofocusHandler>(
    `Autofocusing handler`,
);

// TODO: 3.0 remove in ivy compilation
export function tuiAutofocusHandlerFactory(
    tuiFocusableComponent: TuiFocusableElementAccessor | null,
    elementRef: ElementRef<HTMLElement>,
    animationFrame$: Observable<number>,
    renderer: Renderer2,
    ngZone: NgZone,
    windowRef: Window,
    isIos: boolean,
): TuiAutofocusHandler {
    return isIos
        ? new TuiIosAutofocusHandler(
              tuiFocusableComponent,
              elementRef,
              renderer,
              ngZone,
              windowRef,
          )
        : new TuiDefaultAutofocusHandler(
              tuiFocusableComponent,
              elementRef,
              animationFrame$,
          );
}

export const TUI_AUTOFOCUS_PROVIDERS = [
    {
        provide: TUI_AUTOFOCUS_HANDLER,
        // TODO: replace to useClass in v3.0
        useFactory: tuiAutofocusHandlerFactory,
        deps: [
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

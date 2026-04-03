import {inject, InjectionToken, type Signal} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {fromEvent, map, type Observable, startWith} from 'rxjs';

export const TUI_WINDOW_SIZE = new InjectionToken<Observable<DOMRect>>(
    ngDevMode ? 'TUI_WINDOW_SIZE' : '',
    {factory: () => toObservable(tuiWindowSize(inject(WA_WINDOW)))},
);

export function tuiWindowSize(window: Window): Signal<DOMRect> {
    return toSignal(
        fromEvent(window, 'resize').pipe(
            startWith(null),
            map(() => {
                const width = Math.max(
                    window.document.documentElement.clientWidth || 0,
                    window.innerWidth || 0,
                    window.visualViewport?.width || 0,
                );
                const height = Math.max(
                    window.document.documentElement.clientHeight || 0,
                    window.innerHeight || 0,
                    window.visualViewport?.height || 0,
                );
                const rect = {
                    width,
                    height,
                    top: 0,
                    left: 0,
                    right: width,
                    bottom: height,
                    x: 0,
                    y: 0,
                };

                return {
                    ...rect,
                    toJSON: () => JSON.stringify(rect),
                };
            }),
        ),
        {requireSync: true},
    );
}

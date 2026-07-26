import {type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {fromEvent, map, startWith} from 'rxjs';

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

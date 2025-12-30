import {inject, InjectionToken, RendererFactory2} from '@angular/core';
import {map, share, startWith, Subject, switchMap, timer} from 'rxjs';

// TODO: Remove when fixed: https://issues.chromium.org/issues/41484175
export const TUI_REMOVED_ELEMENT = new InjectionToken(
    ngDevMode ? 'TUI_REMOVED_ELEMENT' : '',
    {
        factory: () => {
            const element$ = new Subject<Element | null>();
            const renderer = inject(RendererFactory2).createRenderer(null, null);
            const proto = Object.getPrototypeOf((renderer as any).delegate ?? renderer);
            const {removeChild} = proto;

            proto.removeChild = function (...args: any[]): void {
                element$.next(args[1]);
                removeChild.apply(this, args);
            };

            return element$.pipe(
                startWith(null),
                switchMap((element) =>
                    timer(0).pipe(
                        map(() => null),
                        startWith(element),
                    ),
                ),
                share(),
            );
        },
    },
);

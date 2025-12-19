import {
    ANIMATION_MODULE_TYPE,
    inject,
    InjectionToken,
    RendererFactory2,
} from '@angular/core';
import {
    debounceTime,
    identity,
    map,
    share,
    startWith,
    Subject,
    switchMap,
    timer,
} from 'rxjs';

// TODO: Remove when fixed: https://issues.chromium.org/issues/41484175
export const TUI_REMOVED_ELEMENT = new InjectionToken(
    ngDevMode ? 'TUI_REMOVED_ELEMENT' : '',
    {
        factory: () => {
            const element$ = new Subject<Element | null>();
            const renderer = inject(RendererFactory2).createRenderer(null, null);
            const proto = Object.getPrototypeOf((renderer as any).delegate ?? renderer);
            const ngAnimationEnabled =
                inject(ANIMATION_MODULE_TYPE, {optional: true}) === 'BrowserAnimations';
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
                // Applications with / without `provideAnimations()` has different timing for DOM element removal – make consistent behavior.
                ngAnimationEnabled ? identity : debounceTime(0),
                share(),
            );
        },
    },
);

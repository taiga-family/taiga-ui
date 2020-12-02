import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {TUI_LOADED} from '@taiga-ui/addon-mobile/tokens';
import {TUI_IS_IOS, TuiDestroyService, typedFromEvent} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {endWith, filter, map, mapTo, scan, switchMap, takeUntil} from 'rxjs/operators';

export const MICRO_OFFSET = 10 ** -6;
export const PULLED_DISTANCE = 50;

export const TUI_PULLING = new InjectionToken<Observable<number>>(
    'Stream that emits content pulling',
);

export const TUI_PULL_TO_REFRESH_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TUI_PULLING,
        deps: [TUI_IS_IOS, TUI_LOADED, ElementRef, TuiDestroyService],
        useFactory: pullingFactory,
    },
];

export function pullingFactory(
    isIOS: boolean,
    loaded$: Observable<unknown>,
    {nativeElement}: ElementRef<HTMLElement>,
    destroy$: Observable<void>,
): Observable<number> {
    return merge(
        typedFromEvent(nativeElement, 'touchstart').pipe(
            filter(() => nativeElement.scrollTop === 0),
            switchMap(touchStart =>
                typedFromEvent(nativeElement, 'touchmove').pipe(
                    map(touchMove => {
                        return (
                            touchMove.touches[0].clientY - touchStart.touches[0].clientY
                        );
                    }),
                    takeUntil(typedFromEvent(nativeElement, 'touchend')),
                    endWith(0),
                ),
            ),
            takeUntil(destroy$),
        ),
        loaded$.pipe(mapTo(NaN)),
    ).pipe(
        scan((max, current) => {
            const androidLoading = !isIOS && max === PULLED_DISTANCE && !isNaN(current);

            if (androidLoading || (current === 0 && max > PULLED_DISTANCE)) {
                return PULLED_DISTANCE;
            }

            return !isNaN(current) ? current + MICRO_OFFSET : 0;
        }, 0),
    );
}

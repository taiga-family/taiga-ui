import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {TUI_LOADED} from '@taiga-ui/addon-mobile/tokens';
import {TUI_IS_IOS, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {endWith, filter, map, mapTo, scan, switchMap, takeUntil} from 'rxjs/operators';

export const MICRO_OFFSET = 10 ** -6;
export const PULLED_DISTANCE = 50;

export const TUI_PULLING = new InjectionToken<Observable<number>>(
    `[TUI_PULLING]: Stream that emits content pulling`,
);

export const TUI_PULL_TO_REFRESH_PROVIDERS: Provider[] = [
    {
        provide: TUI_PULLING,
        deps: [TUI_IS_IOS, TUI_LOADED, ElementRef],
        useFactory: (
            isIOS: boolean,
            loaded$: Observable<unknown>,
            {nativeElement}: ElementRef<HTMLElement>,
        ): Observable<number> => {
            return merge(
                tuiTypedFromEvent(nativeElement, `touchstart`, {passive: true}).pipe(
                    filter(() => nativeElement.scrollTop === 0),
                    switchMap(touchStart =>
                        tuiTypedFromEvent(nativeElement, `touchmove`).pipe(
                            map(
                                touchMove =>
                                    touchMove.touches[0].clientY -
                                    touchStart.touches[0].clientY,
                            ),
                            takeUntil(tuiTypedFromEvent(nativeElement, `touchend`)),
                            endWith(0),
                        ),
                    ),
                ),
                loaded$.pipe(mapTo(NaN)),
            ).pipe(
                scan((max, current) => {
                    if (isNaN(current)) {
                        return 0;
                    }

                    const androidLoading = !isIOS && max === PULLED_DISTANCE;
                    const dropped = current === 0 && max > PULLED_DISTANCE;

                    return androidLoading || dropped
                        ? PULLED_DISTANCE
                        : current + MICRO_OFFSET;
                }, 0),
            );
        },
    },
];

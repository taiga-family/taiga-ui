import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {
    TuiDestroyService,
    TuiFocusVisibleService,
    tuiStopPropagation,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {merge, Observable, timer} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    mapTo,
    startWith,
    switchMapTo,
    take,
    takeUntil,
} from 'rxjs/operators';

const DELAY = 1000;

export const TUI_DESCRIBED_BY_SHOW = new InjectionToken<Observable<boolean>>(
    `Accessible tooltip visibility stream`,
);
export const TUI_DESCRIBED_BY_PROVIDERS: Provider[] = [
    TuiDestroyService,
    TuiFocusVisibleService,
    {
        provide: TUI_DESCRIBED_BY_SHOW,
        deps: [TuiFocusVisibleService, ElementRef],
        useFactory: describedByFactory,
    },
];

// eslint-disable-next-line @typescript-eslint/naming-convention
export function describedByFactory(
    focusVisible$: Observable<boolean>,
    {nativeElement}: ElementRef<HTMLElement>,
): Observable<boolean> {
    return focusVisible$
        .pipe(
            filter(Boolean),
            switchMapTo(
                timer(DELAY).pipe(
                    mapTo(true),
                    takeUntil(
                        merge(
                            typedFromEvent(nativeElement, `keydown`),
                            typedFromEvent(nativeElement, `blur`),
                        ),
                    ),
                ),
            ),
            switchMapTo(
                merge(
                    typedFromEvent(nativeElement, `keydown`).pipe(
                        filter(({key}) => key === `Escape`),
                        take(1),
                        tuiStopPropagation(),
                        mapTo(false),
                        startWith(true),
                    ),
                    typedFromEvent(nativeElement, `blur`).pipe(mapTo(false)),
                ),
            ),
        )
        .pipe(distinctUntilChanged());
}

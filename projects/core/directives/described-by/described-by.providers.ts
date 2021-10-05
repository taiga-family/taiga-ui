import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {TuiDestroyService, TuiFocusVisibleService, typedFromEvent} from '@taiga-ui/cdk';
import {merge, Observable, timer} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    mapTo,
    startWith,
    switchMapTo,
    take,
    takeUntil,
    tap,
} from 'rxjs/operators';

const DELAY = 1000;

export const TUI_DESCRIBED_BY_SHOW = new InjectionToken<Observable<boolean>>(
    'Accessible tooltip visibility stream',
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

export function describedByFactory(
    focusVisible$: Observable<boolean>,
    {nativeElement}: ElementRef<HTMLElement>,
): Observable<boolean> {
    return merge(
        focusVisible$.pipe(
            filter(v => v),
            switchMapTo(
                timer(DELAY).pipe(
                    mapTo(true),
                    takeUntil(typedFromEvent(nativeElement, 'keydown')),
                ),
            ),
            switchMapTo(
                typedFromEvent(nativeElement, 'keydown').pipe(
                    filter(({key}) => key === 'Escape'),
                    take(1),
                    tap(event => {
                        event.stopPropagation();
                    }),
                    mapTo(false),
                    startWith(true),
                ),
            ),
        ),
        typedFromEvent(nativeElement, 'blur').pipe(mapTo(false)),
    ).pipe(distinctUntilChanged());
}

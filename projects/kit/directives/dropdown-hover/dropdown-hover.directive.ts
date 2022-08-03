import {Directive, ElementRef, HostListener, Inject} from '@angular/core';
import {
    TuiDestroyService,
    tuiGetClosestFocusable,
    tuiIsNativeFocusedIn,
    tuiIsPresent,
    tuiSetNativeMouseFocused,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {merge, Observable, of, timer} from 'rxjs';
import {
    debounce,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    mapTo,
    share,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs/operators';

// TODO: Refactor
@Directive({
    selector: `tui-hosted-dropdown[tuiDropdownHover]`,
    providers: [TuiDestroyService],
})
export class TuiDropdownHoverDirective {
    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(TuiHostedDropdownComponent)
        private readonly dropdown: TuiHostedDropdownComponent,
    ) {
        const dropdown$ = dropdown.openChange.pipe(
            // Give change detection time to open dropdown
            debounceTime(0),
            map(() => dropdown.dropdown),
            filter(tuiIsPresent),
            share(),
        );

        const open$ = merge(
            tuiTypedFromEvent(nativeElement, `mouseenter`),
            tuiTypedFromEvent(nativeElement, `click`).pipe(
                tap(e => e.stopImmediatePropagation()),
            ),
            dropdown$.pipe(
                switchMap(element =>
                    merge(
                        tuiTypedFromEvent(element, `focusin`),
                        tuiTypedFromEvent(element, `mouseenter`),
                    ),
                ),
            ),
        ).pipe(mapTo(true));

        const close$ = merge(
            tuiTypedFromEvent(nativeElement, `mouseleave`),
            dropdown$.pipe(
                switchMap(element =>
                    tuiTypedFromEvent(element, `mouseleave`).pipe(
                        filter(() => !tuiIsNativeFocusedIn(element)),
                    ),
                ),
            ),
        ).pipe(mapTo(false));

        merge(open$, close$)
            .pipe(
                debounce(value => (value ? of(value) : timer(300))),
                distinctUntilChanged(),
                takeUntil(destroy$),
            )
            .subscribe(open => {
                dropdown.updateOpen(open);
            });
    }

    @HostListener(`mouseenter`)
    onMouseEnter(): void {
        const {host} = this.dropdown;

        if (tuiIsNativeFocusedIn(host)) {
            return;
        }

        const focusable = tuiGetClosestFocusable(host, false, host, false);

        if (focusable) {
            tuiSetNativeMouseFocused(focusable);
        }
    }
}

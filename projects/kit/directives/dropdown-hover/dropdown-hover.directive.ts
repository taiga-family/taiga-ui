import {Directive, ElementRef, HostListener, Inject} from '@angular/core';
import {
    getClosestFocusable,
    isNativeFocusedIn,
    isPresent,
    setNativeMouseFocused,
    TuiDestroyService,
    typedFromEvent,
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
            filter(isPresent),
            share(),
        );

        const open$ = merge(
            typedFromEvent(nativeElement, `mouseenter`),
            typedFromEvent(nativeElement, `click`).pipe(
                tap(e => e.stopImmediatePropagation()),
            ),
            dropdown$.pipe(
                switchMap(element =>
                    merge(
                        typedFromEvent(element, `focusin`),
                        typedFromEvent(element, `mouseenter`),
                    ),
                ),
            ),
        ).pipe(mapTo(true));

        const close$ = merge(
            typedFromEvent(nativeElement, `mouseleave`),
            dropdown$.pipe(
                switchMap(element =>
                    typedFromEvent(element, `mouseleave`).pipe(
                        filter(() => !isNativeFocusedIn(element)),
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

        if (isNativeFocusedIn(host)) {
            return;
        }

        const focusable = getClosestFocusable(host, false, host, false);

        if (focusable) {
            setNativeMouseFocused(focusable);
        }
    }
}

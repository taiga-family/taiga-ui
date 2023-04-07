import {
    AfterViewInit,
    ContentChildren,
    Directive,
    ElementRef,
    Inject,
    QueryList,
    Self,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiDestroyService,
    tuiGetClosestFocusable,
    tuiPreventDefault,
    tuiPure,
    tuiQueryListChanges,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core';
import {EMPTY, merge, Observable} from 'rxjs';
import {
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
    takeUntil,
    tap,
} from 'rxjs/operators';

@Directive({
    selector: 'tui-data-list[tuiDataListDropdownManager]',
    providers: [TuiDestroyService],
})
export class TuiDataListDropdownManagerDirective implements AfterViewInit {
    @ContentChildren(TuiDropdownDirective, {descendants: true})
    private readonly dropdowns: QueryList<TuiDropdownDirective> = EMPTY_QUERY;

    @ContentChildren(TuiDropdownDirective, {read: ElementRef, descendants: true})
    private readonly els: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    constructor(
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    ) {}

    ngAfterViewInit(): void {
        this.right$.pipe(takeUntil(this.destroy$)).subscribe(index => {
            this.tryToFocus(index);
        });

        merge(this.immediate$, this.debounce$)
            .pipe(
                switchMap(active => {
                    this.dropdowns.forEach((dropdown, index) => {
                        dropdown.toggle(index === active);
                    });

                    const element = this.els.get(active);
                    const dropdown = this.dropdowns.get(active);

                    if (!element || !dropdown?.dropdownBoxRef) {
                        return EMPTY;
                    }

                    const {nativeElement} = dropdown.dropdownBoxRef.location;
                    const mouseEnter$ = tuiTypedFromEvent(
                        nativeElement,
                        'mouseenter',
                    ).pipe(take(1));
                    const esc$ = merge(
                        tuiTypedFromEvent(element.nativeElement, 'keydown'),
                        tuiTypedFromEvent(nativeElement, 'keydown'),
                    ).pipe(filter(({key}) => key === 'Escape'));

                    return merge(mouseEnter$, esc$).pipe(
                        tap(event => {
                            if (dropdown.dropdownBoxRef) {
                                event.stopPropagation();
                            }

                            element.nativeElement.focus();
                            dropdown.toggle('offsetX' in event);
                        }),
                    );
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }

    @tuiPure
    private get elements$(): Observable<readonly HTMLElement[]> {
        return tuiQueryListChanges(this.els).pipe(
            map(array => array.map(({nativeElement}) => nativeElement)),
            shareReplay({bufferSize: 1, refCount: true}),
        );
    }

    @tuiPure
    private get right$(): Observable<number> {
        return this.elements$.pipe(
            switchMap(elements =>
                merge(
                    ...elements.map((element, index) =>
                        tuiTypedFromEvent(element, 'keydown').pipe(
                            filter(({key}) => key === 'ArrowRight'),
                            tuiPreventDefault(),
                            map(() => index),
                        ),
                    ),
                ),
            ),
        );
    }

    @tuiPure
    private get immediate$(): Observable<number> {
        return this.elements$.pipe(
            switchMap(elements =>
                merge(
                    ...elements.map((element, index) =>
                        tuiTypedFromEvent(element, 'click').pipe(map(() => index)),
                    ),
                ),
            ),
        );
    }

    @tuiPure
    private get debounce$(): Observable<number> {
        return this.elements$.pipe(
            switchMap(elements =>
                merge(
                    ...elements.map((element, index) =>
                        merge(
                            tuiTypedFromEvent(element, 'focus'),
                            tuiTypedFromEvent(element, 'blur'),
                        ).pipe(
                            filter(({relatedTarget}) =>
                                this.notInDropdown(relatedTarget, index),
                            ),
                            map(({type}) => (type === 'focus' ? index : NaN)),
                        ),
                    ),
                ),
            ),
            debounceTime(300),
        );
    }

    private notInDropdown(element: EventTarget | null, index: number): boolean {
        return !this.dropdowns
            .get(index)
            ?.dropdownBoxRef?.location.nativeElement.contains(element);
    }

    private tryToFocus(index: number): void {
        const content = this.dropdowns.get(index)?.dropdownBoxRef?.location.nativeElement;

        if (!content) {
            return;
        }

        // First item is focus trap
        const focusTrap = tuiGetClosestFocusable({initial: content, root: content});
        const item = tuiGetClosestFocusable({
            initial: focusTrap || content,
            root: content,
        });

        if (item) {
            item.focus();
        }
    }
}

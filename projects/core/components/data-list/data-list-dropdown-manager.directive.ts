import {
    AfterViewInit,
    ContentChildren,
    Directive,
    ElementRef,
    QueryList,
} from '@angular/core';
import {
    EMPTY_QUERY,
    getClosestKeyboardFocusable,
    itemsQueryListObservable,
    preventDefault,
    setNativeFocused,
    tuiPure,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {EMPTY, merge, Observable} from 'rxjs';
import {
    debounceTime,
    filter,
    map,
    mapTo,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

@Directive({
    selector: 'tui-data-list[tuiDataListDropdownManager]',
})
export class TuiDataListDropdownManagerDirective implements AfterViewInit {
    @ContentChildren(TuiDropdownDirective, {descendants: true})
    private readonly dropdowns: QueryList<TuiDropdownDirective> = EMPTY_QUERY;

    @ContentChildren(TuiDropdownDirective, {read: ElementRef, descendants: true})
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    ngAfterViewInit() {
        this.right$.subscribe(index => {
            this.tryToFocus(index);
        });

        merge(this.immediate$, this.debounce$)
            .pipe(
                switchMap(active => {
                    this.dropdowns.forEach((dropdown, index) => {
                        dropdown.open = index === active;
                    });

                    const element = this.elements.toArray()[active];
                    const dropdown = this.dropdowns.toArray()[active];

                    if (!element || !dropdown || !dropdown.dropdownBoxRef) {
                        return EMPTY;
                    }

                    const {nativeElement} = dropdown.dropdownBoxRef.location;
                    const mouseEnter$ = typedFromEvent(nativeElement, 'mouseenter').pipe(
                        take(1),
                    );
                    const esc$ = merge(
                        typedFromEvent(element.nativeElement, 'keydown'),
                        typedFromEvent(nativeElement, 'keydown'),
                    ).pipe(filter(({keyCode}) => keyCode === 27));

                    return merge(mouseEnter$, esc$).pipe(
                        tap(event => {
                            if (dropdown.dropdownBoxRef) {
                                event.stopPropagation();
                            }

                            setNativeFocused(element.nativeElement);
                            dropdown.open = event instanceof MouseEvent;
                        }),
                    );
                }),
            )
            .subscribe();
    }

    @tuiPure
    private get elements$(): Observable<ReadonlyArray<HTMLElement>> {
        return itemsQueryListObservable(this.elements).pipe(
            map(array => array.map(({nativeElement}) => nativeElement)),
            shareReplay(1),
        );
    }

    @tuiPure
    private get right$(): Observable<number> {
        return this.elements$.pipe(
            switchMap(elements =>
                merge(
                    ...elements.map((element, index) =>
                        typedFromEvent(element, 'keydown').pipe(
                            filter(({keyCode}) => keyCode === 39),
                            preventDefault(),
                            mapTo(index),
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
                        typedFromEvent(element, 'click').pipe(mapTo(index)),
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
                            typedFromEvent(element, 'focus'),
                            typedFromEvent(element, 'blur'),
                        ).pipe(
                            filter(({relatedTarget}) =>
                                this.notInDropdown(relatedTarget, index),
                            ),
                            map(({type}) => (type === 'focus' ? index : NaN)),
                            debounceTime(300),
                        ),
                    ),
                ),
            ),
        );
    }

    private notInDropdown(element: EventTarget | null, index: number): boolean {
        const dropdown = this.dropdowns.toArray()[index];

        return (
            !dropdown ||
            !dropdown.dropdownBoxRef ||
            !dropdown.dropdownBoxRef.location.nativeElement.contains(element)
        );
    }

    private tryToFocus(index: number) {
        const dropdown = this.dropdowns.toArray()[index];
        const content =
            dropdown &&
            dropdown.dropdownBoxRef &&
            dropdown.dropdownBoxRef.instance.contentElementRef;

        if (!content) {
            return;
        }

        const item = getClosestKeyboardFocusable(
            content.nativeElement,
            false,
            content.nativeElement,
        );

        if (item) {
            setNativeFocused(item);
        }
    }
}

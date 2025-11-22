import {
    type AfterViewInit,
    contentChildren,
    DestroyRef,
    Directive,
    ElementRef,
    inject,
} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiGetClosestFocusable} from '@taiga-ui/cdk/utils/focus';
import {TuiDropdownDirective} from '@taiga-ui/core/portals/dropdown';
import {
    debounceTime,
    EMPTY,
    filter,
    map,
    merge,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs';

@Directive({
    selector: 'tui-data-list[tuiDataListDropdownManager]',
})
export class TuiDataListDropdownManager implements AfterViewInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly dropdowns = contentChildren(TuiDropdownDirective, {
        descendants: true,
    });

    private readonly els = contentChildren(TuiDropdownDirective, {
        read: ElementRef,
        descendants: true,
    });

    private readonly elements$ = toObservable(this.els).pipe(
        map((array) => array.map(({nativeElement}) => nativeElement)),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    private readonly right$ = this.elements$.pipe(
        switchMap((elements) =>
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

    private readonly immediate$ = this.elements$.pipe(
        switchMap((elements) =>
            merge(
                ...elements.map((element, index) =>
                    tuiTypedFromEvent(element, 'click').pipe(map(() => index)),
                ),
            ),
        ),
    );

    private readonly debounce$ = this.elements$.pipe(
        switchMap((elements) =>
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

    public ngAfterViewInit(): void {
        this.right$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((index) => {
            this.tryToFocus(index);
        });

        merge(this.immediate$, this.debounce$)
            .pipe(
                switchMap((active) => {
                    this.dropdowns().forEach((dropdown, index) => {
                        dropdown.toggle(index === active);
                    });

                    const element = this.els()[active];
                    const dropdown = this.dropdowns()[active];
                    const ref = dropdown?.ref();

                    if (!element || !dropdown || !ref) {
                        return EMPTY;
                    }

                    const {nativeElement} = ref.location;
                    const mouseEnter$ = tuiTypedFromEvent(
                        nativeElement,
                        'mouseenter',
                    ).pipe(take(1));
                    const esc$ = merge(
                        tuiTypedFromEvent(element.nativeElement, 'keydown'),
                        tuiTypedFromEvent(nativeElement, 'keydown'),
                    ).pipe(filter(({key}) => key === 'Escape'));

                    return merge(mouseEnter$, esc$).pipe(
                        tap((event) => {
                            if (dropdown.ref()) {
                                event.stopPropagation();
                            }

                            element.nativeElement.focus();
                            dropdown.toggle('offsetX' in event);
                        }),
                    );
                }),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    private notInDropdown(element: EventTarget | null, index: number): boolean {
        return !this.dropdowns()[index]?.ref()?.location.nativeElement.contains(element);
    }

    private tryToFocus(index: number): void {
        const content = this.dropdowns()[index]?.ref()?.location.nativeElement;

        if (!content) {
            return;
        }

        // First item is focus trap
        const focusTrap = tuiGetClosestFocusable({initial: content, root: content});
        const item = tuiGetClosestFocusable({
            initial: focusTrap || content,
            root: content,
        });

        item?.focus();
    }
}

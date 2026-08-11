import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {
    ContentChild,
    Directive,
    ElementRef,
    inject,
    Input,
    PLATFORM_ID,
} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {
    tuiGetActualTarget,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {
    delay,
    distinctUntilChanged,
    EMPTY,
    filter,
    fromEvent,
    map,
    merge,
    NEVER,
    type Observable,
    of,
    share,
    startWith,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_HOVER_OPTIONS} from './dropdown-hover.options';
import {TuiDropdownOpen} from './dropdown-open.directive';

@Directive({
    standalone: true,
    selector: '[tuiDropdownHover]',
    providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
    host: {
        '(click.capture)': 'onClick($event)',
    },
})
export class TuiDropdownHover extends TuiDriver {
    @ContentChild('tuiDropdownHost', {descendants: true, read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);
    private readonly options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    private readonly activeZone = inject(TuiActiveZone);
    private readonly open = inject(TuiDropdownOpen, {optional: true});
    /**
     * Dropdown can be removed not only via click/touch –
     * swipe on mobile devices removes dropdown sheet without triggering new mouseover / mouseout events.
     */
    private readonly dropdownExternalRemoval$ = toObservable(
        inject(TuiDropdownDirective).ref,
    ).pipe(filter((x) => !x && this.hovered));

    private readonly stream$ = isPlatformBrowser(inject(PLATFORM_ID))
        ? this.createStream()
        : NEVER;

    @Input('tuiDropdownShowDelay')
    public showDelay = this.options.showDelay;

    @Input('tuiDropdownHideDelay')
    public hideDelay = this.options.hideDelay;

    public hovered = false;

    public readonly type = 'dropdown';

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    protected onClick(event: MouseEvent): void {
        if (this.hovered && this.open) {
            event.preventDefault();
        }
    }

    private isHovered(element: Element): boolean {
        const host = this.dropdownHost?.nativeElement || this.el;
        const hovered = host.contains(element);
        const child = !this.el.contains(element) && this.activeZone.contains(element);

        return hovered || child;
    }

    private createStream(): Observable<boolean> {
        const root = this.el.getRootNode() as Document | ShadowRoot;
        const mouseover$ = tuiTypedFromEvent<MouseEvent>(root, 'mouseover');
        const mouseout$ = tuiTypedFromEvent<MouseEvent>(root, 'mouseout');

        return merge(
            /**
             * Dropdown can be removed not only via click/touch –
             * swipe on mobile devices removes dropdown sheet without triggering new mouseover / mouseout events.
             */
            this.dropdownExternalRemoval$.pipe(
                switchMap(() =>
                    tuiTypedFromEvent(this.doc, 'pointerdown').pipe(
                        map(tuiGetActualTarget),
                        delay(this.hideDelay),
                        startWith(null),
                        takeUntil(mouseover$),
                    ),
                ),
            ),
            mouseover$.pipe(map(tuiGetActualTarget)),
            mouseout$.pipe(map((event) => event.relatedTarget)),
        ).pipe(
            map((element) => tuiIsElement(element) && this.isHovered(element)),
            distinctUntilChanged(),
            switchMap((visible) =>
                of(visible).pipe(
                    delay(visible ? this.showDelay : this.hideDelay),
                    takeUntil(this.open ? fromEvent(this.el, 'pointerdown') : EMPTY),
                ),
            ),
            tap((hovered) => {
                this.hovered = hovered;
                this.open?.toggle(hovered);
            }),
            share(),
        );
    }
}

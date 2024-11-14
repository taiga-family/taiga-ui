import {DOCUMENT} from '@angular/common';
import {ContentChild, Directive, ElementRef, inject, Input} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {
    tuiGetActualTarget,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {
    delay,
    distinctUntilChanged,
    filter,
    fromEvent,
    map,
    merge,
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

    private readonly stream$ = merge(
        this.dropdownExternalRemoval$.pipe(
            switchMap(() =>
                tuiTypedFromEvent(this.doc, 'pointerdown').pipe(
                    map(tuiGetActualTarget),
                    delay(this.hideDelay),
                    startWith(null),
                    takeUntil(fromEvent(this.doc, 'mouseover')),
                ),
            ),
        ),
        tuiTypedFromEvent(this.doc, 'mouseover').pipe(map(tuiGetActualTarget)),
        tuiTypedFromEvent(this.doc, 'mouseout').pipe(map((e) => e.relatedTarget)),
    ).pipe(
        map((element) => tuiIsElement(element) && this.isHovered(element)),
        distinctUntilChanged(),
        switchMap((v) => of(v).pipe(delay(v ? this.showDelay : this.hideDelay))),
        tuiZoneOptimized(),
        tap((hovered) => {
            this.hovered = hovered;
            this.open?.toggle(hovered);
        }),
        share(),
    );

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
}

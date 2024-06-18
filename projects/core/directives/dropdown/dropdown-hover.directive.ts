import {DOCUMENT} from '@angular/common';
import {
    ContentChild,
    Directive,
    ElementRef,
    HostListener,
    inject,
    Input,
    NgZone,
} from '@angular/core';
import {
    TuiActiveZone,
    tuiGetActualTarget,
    tuiInjectElement,
    tuiIsElement,
    tuiTypedFromEvent,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {delay, distinctUntilChanged, map, merge, of, share, switchMap, tap} from 'rxjs';

import {TUI_DROPDOWN_HOVER_OPTIONS} from './dropdown-hover.options';
import {TuiDropdownOpen} from './dropdown-open.directive';

@Directive({
    standalone: true,
    selector: '[tuiDropdownHover]',
    providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
})
export class TuiDropdownHover extends TuiDriver {
    @ContentChild('tuiDropdownHost', {descendants: true, read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);
    private readonly options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    private readonly activeZone = inject(TuiActiveZone);
    private readonly open = inject(TuiDropdownOpen, {optional: true});
    private readonly stream$ = merge(
        tuiTypedFromEvent(this.doc, 'mouseover').pipe(map(tuiGetActualTarget)),
        tuiTypedFromEvent(this.doc, 'mouseout').pipe(map(e => e.relatedTarget)),
    ).pipe(
        map(element => tuiIsElement(element) && this.isHovered(element)),
        distinctUntilChanged(),
        switchMap(v => of(v).pipe(delay(v ? this.showDelay : this.hideDelay))),
        tuiZoneOptimized(inject(NgZone)),
        tap(hovered => {
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
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    @HostListener('click.capture', ['$event'])
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

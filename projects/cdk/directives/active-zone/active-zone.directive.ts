import {Directive, inject, Input, NgZone, type OnDestroy, Output} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_ACTIVE_ELEMENT} from '@taiga-ui/cdk/tokens';
import {tuiArrayRemove, tuiInjectElement, tuiPure} from '@taiga-ui/cdk/utils';
import {
    distinctUntilChanged,
    map,
    type Observable,
    share,
    skip,
    startWith,
    tap,
} from 'rxjs';

@Directive({
    standalone: true,
    selector:
        '[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)',
    exportAs: 'tuiActiveZone',
    host: {
        '(document:mousedown.zoneless)': '(0)',
    },
})
export class TuiActiveZone implements OnDestroy {
    // TODO: Should we remove in v5? It's no longer used in Taiga UI
    private readonly control: any = inject(NgControl, {self: true, optional: true});
    private readonly active$ = inject<Observable<Element | null>>(TUI_ACTIVE_ELEMENT);
    private readonly zone = inject(NgZone);
    private readonly el = tuiInjectElement();
    private tuiActiveZoneParent: TuiActiveZone | null = null;
    private readonly directParentActiveZone = inject(TuiActiveZone, {
        skipSelf: true,
        optional: true,
    });

    @Output()
    public readonly tuiActiveZoneChange = this.active$.pipe(
        map((element) => !!element && this.contains(element)),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tap((active) => {
            if (!active && typeof this.control?.valueAccessor.onTouched === 'function') {
                this.control.valueAccessor.onTouched();
            }
        }),
        tuiZoneOptimized(this.zone),
        share(),
    );

    public children: readonly TuiActiveZone[] = [];

    constructor() {
        this.directParentActiveZone?.addSubActiveZone(this);
    }

    @Input('tuiActiveZoneParent')
    public set tuiActiveZoneParentSetter(zone: TuiActiveZone | null) {
        this.setZone(zone);
    }

    public ngOnDestroy(): void {
        this.directParentActiveZone?.removeSubActiveZone(this);
        this.tuiActiveZoneParent?.removeSubActiveZone(this);
    }

    public contains(node: Node): boolean {
        return (
            this.el.contains(node) || this.children.some((item) => item.contains(node))
        );
    }

    @tuiPure
    private setZone(zone: TuiActiveZone | null): void {
        this.tuiActiveZoneParent?.removeSubActiveZone(this);
        zone?.addSubActiveZone(this);
        this.tuiActiveZoneParent = zone;
    }

    private addSubActiveZone(activeZone: TuiActiveZone): void {
        this.children = [...this.children, activeZone];
    }

    private removeSubActiveZone(activeZone: TuiActiveZone): void {
        this.children = tuiArrayRemove(this.children, this.children.indexOf(activeZone));
    }
}

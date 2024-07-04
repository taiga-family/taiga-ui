import type {OnDestroy} from '@angular/core';
import {Directive, inject, Input, NgZone, Output} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_ACTIVE_ELEMENT} from '@taiga-ui/cdk/tokens';
import {tuiArrayRemove, tuiInjectElement, tuiPure} from '@taiga-ui/cdk/utils';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map, skip, startWith, tap} from 'rxjs';

@Directive({
    standalone: true,
    selector:
        '[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)',
    exportAs: 'tuiActiveZone',
    host: {
        '(document:mousedown.silent)': '(0)',
    },
})
export class TuiActiveZone implements OnDestroy {
    private readonly control: any = inject(NgControl, {optional: true, self: true});
    private readonly active$ = inject<Observable<Element | null>>(TUI_ACTIVE_ELEMENT);
    private readonly zone = inject(NgZone);
    private readonly el = tuiInjectElement();
    private tuiActiveZoneParent: TuiActiveZone | null = null;
    private subActiveZones: readonly TuiActiveZone[] = [];
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
    );

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
            this.el.contains(node) ||
            this.subActiveZones.some(
                (item, index, array) =>
                    array.indexOf(item) === index && item.contains(node),
            )
        );
    }

    @tuiPure
    private setZone(zone: TuiActiveZone | null): void {
        this.tuiActiveZoneParent?.removeSubActiveZone(this);
        zone?.addSubActiveZone(this);
        this.tuiActiveZoneParent = zone;
    }

    private addSubActiveZone(activeZone: TuiActiveZone): void {
        this.subActiveZones = [...this.subActiveZones, activeZone];
    }

    private removeSubActiveZone(activeZone: TuiActiveZone): void {
        this.subActiveZones = tuiArrayRemove(
            this.subActiveZones,
            this.subActiveZones.indexOf(activeZone),
        );
    }
}

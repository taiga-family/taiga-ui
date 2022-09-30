import {
    Directive,
    ElementRef,
    Inject,
    Input,
    NgZone,
    OnDestroy,
    Optional,
    Output,
    SkipSelf,
} from '@angular/core';
import {tuiDefaultProp, tuiPure} from '@taiga-ui/cdk/decorators';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_ACTIVE_ELEMENT} from '@taiga-ui/cdk/tokens';
import {tuiArrayRemove} from '@taiga-ui/cdk/utils';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, skip, startWith} from 'rxjs/operators';

@Directive({
    selector: `[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)`,
    exportAs: `tuiActiveZone`,
})
export class TuiActiveZoneDirective implements OnDestroy {
    private subActiveZones: readonly TuiActiveZoneDirective[] = [];

    private tuiActiveZoneParent: TuiActiveZoneDirective | null = null;

    @Input(`tuiActiveZoneParent`)
    @tuiDefaultProp()
    set tuiActiveZoneParentSetter(zone: TuiActiveZoneDirective | null) {
        this.setZone(zone);
    }

    @Output()
    readonly tuiActiveZoneChange = this.active$.pipe(
        map(element => !!element && this.contains(element)),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tuiZoneOptimized(this.ngZone),
    );

    constructor(
        @Inject(TUI_ACTIVE_ELEMENT)
        private readonly active$: Observable<Element | null>,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Optional()
        @SkipSelf()
        @Inject(TuiActiveZoneDirective)
        private readonly directParentActiveZone: TuiActiveZoneDirective | null,
    ) {
        if (this.directParentActiveZone) {
            this.directParentActiveZone.addSubActiveZone(this);
        }
    }

    ngOnDestroy(): void {
        if (this.directParentActiveZone) {
            this.directParentActiveZone.removeSubActiveZone(this);
        }

        if (this.tuiActiveZoneParent) {
            this.tuiActiveZoneParent.removeSubActiveZone(this);
        }
    }

    contains(node: Node): boolean {
        return (
            this.elementRef.nativeElement.contains(node) ||
            this.subActiveZones.some(
                (item, index, array) =>
                    array.indexOf(item) === index && item.contains(node),
            )
        );
    }

    @tuiPure
    private setZone(zone: TuiActiveZoneDirective | null): void {
        if (this.tuiActiveZoneParent) {
            this.tuiActiveZoneParent.removeSubActiveZone(this);
        }

        if (zone) {
            zone.addSubActiveZone(this);
        }

        this.tuiActiveZoneParent = zone;
    }

    private addSubActiveZone(activeZone: TuiActiveZoneDirective): void {
        this.subActiveZones = [...this.subActiveZones, activeZone];
    }

    private removeSubActiveZone(activeZone: TuiActiveZoneDirective): void {
        this.subActiveZones = tuiArrayRemove(
            this.subActiveZones,
            this.subActiveZones.indexOf(activeZone),
        );
    }
}

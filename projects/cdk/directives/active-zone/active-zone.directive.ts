import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, inject, Injectable, type OnDestroy} from '@angular/core';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_ACTIVE_ELEMENT} from '@taiga-ui/cdk/tokens';
import {tuiArrayRemove} from '@taiga-ui/cdk/utils/miscellaneous';
import {distinctUntilChanged, map, type Observable, share, skip, startWith} from 'rxjs';

@Injectable({providedIn: 'root'})
@Directive({
    selector:
        '[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)',
    inputs: ['tuiActiveZoneParentSetter: tuiActiveZoneParent'],
    outputs: ['tuiActiveZoneChange'],
    exportAs: 'tuiActiveZone',
})
export class TuiActiveZone implements OnDestroy {
    private readonly active$ = inject<Observable<Element | null>>(TUI_ACTIVE_ELEMENT);
    private tuiActiveZoneParent: TuiActiveZone | null = null;
    private readonly parent = inject(TuiActiveZone, {skipSelf: true, optional: true});
    private readonly el: HTMLElement =
        inject(ElementRef, {optional: true})?.nativeElement ??
        inject(DOCUMENT).documentElement;

    public readonly tuiActiveZoneChange = this.active$.pipe(
        map((element) => !!element && this.contains(element)),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tuiZoneOptimized(),
        share(),
    );

    public children: readonly TuiActiveZone[] = [];

    constructor() {
        this.parent?.addSubActiveZone(this);
    }

    public set tuiActiveZoneParentSetter(zone: TuiActiveZone | null) {
        this.tuiActiveZoneParent?.removeSubActiveZone(this);
        zone?.addSubActiveZone(this);
        this.tuiActiveZoneParent = zone;
    }

    public ngOnDestroy(): void {
        this.parent?.removeSubActiveZone(this);
        this.tuiActiveZoneParent?.removeSubActiveZone(this);
    }

    public contains(node: Node): boolean {
        return (
            this.el.contains(node) || this.children.some((item) => item.contains(node))
        );
    }

    // issue: https://github.com/typescript-eslint/typescript-eslint/issues/11770
    // eslint-disable-next-line @typescript-eslint/no-unused-private-class-members
    private addSubActiveZone(activeZone: TuiActiveZone): void {
        this.children = [...this.children, activeZone];
    }

    // issue: https://github.com/typescript-eslint/typescript-eslint/issues/11770
    // eslint-disable-next-line @typescript-eslint/no-unused-private-class-members
    private removeSubActiveZone(activeZone: TuiActiveZone): void {
        this.children = tuiArrayRemove(this.children, this.children.indexOf(activeZone));
    }
}

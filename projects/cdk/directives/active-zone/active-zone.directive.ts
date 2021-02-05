import {DOCUMENT} from '@angular/common';
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
import {WINDOW} from '@ng-web-apis/common';
import {tuiDefaultProp} from '@taiga-ui/cdk/decorators';
import {tuiZoneOptimized, typedFromEvent} from '@taiga-ui/cdk/observables';
import {getActualTarget} from '@taiga-ui/cdk/utils/dom';
import {
    getNativeFocused,
    isNativeFocused,
    isNativeMouseFocusable,
} from '@taiga-ui/cdk/utils/focus';
import {merge, Observable, of} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    mapTo,
    skip,
    startWith,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

// @dynamic
@Directive({
    selector:
        '[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)',
    exportAs: 'tuiActiveZone',
})
export class TuiActiveZoneDirective implements OnDestroy {
    private subActiveZones: ReadonlyArray<TuiActiveZoneDirective> = [];

    private tuiActiveZoneParent: TuiActiveZoneDirective | null = null;

    @Input('tuiActiveZoneParent')
    @tuiDefaultProp()
    set tuiActiveZoneParentSetter(zone: TuiActiveZoneDirective | null) {
        if (this.tuiActiveZoneParent) {
            this.tuiActiveZoneParent.removeSubActiveZone(this);
        }

        if (zone) {
            zone.addSubActiveZone(this);
        }

        this.tuiActiveZoneParent = zone;
    }

    @Output()
    readonly tuiActiveZoneChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef) private readonly element: ElementRef<Element>,
        @Inject(TuiActiveZoneDirective)
        @Optional()
        @SkipSelf()
        private readonly directParentActiveZone: TuiActiveZoneDirective | null,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(WINDOW) windowRef: Window,
        @Inject(DOCUMENT) documentRef: Document,
    ) {
        let skipNextFocusOut = false;

        if (this.directParentActiveZone) {
            this.directParentActiveZone.addSubActiveZone(this);
        }

        this.tuiActiveZoneChange = merge(
            typedFromEvent(windowRef, 'focusout').pipe(
                filter(event => {
                    const actualTarget = getActualTarget(event);

                    return (
                        !skipNextFocusOut &&
                        this.contains(actualTarget) &&
                        !isNativeFocused(actualTarget) &&
                        (event.relatedTarget === null ||
                            !this.contains(event.relatedTarget as Node))
                    );
                }),
                mapTo(false),
            ),
            typedFromEvent(windowRef, 'focusin').pipe(
                map(event => this.contains(getActualTarget(event))),
            ),
            typedFromEvent(windowRef, 'mousedown').pipe(
                filter(event => !isNativeFocused(getActualTarget(event))),
                switchMap(event => {
                    const actualTarget = getActualTarget(event);
                    const targetInZone = this.contains(actualTarget);
                    const activeElement = getNativeFocused(documentRef);
                    const focusInZone =
                        activeElement !== null && this.contains(activeElement);
                    const focusNowhere =
                        activeElement === null || activeElement === documentRef.body;

                    // If default behavior is prevented — focus either remained
                    // where it was or it was moved manually so we just check
                    // if the focused element is within the zone or target is
                    // within the zone and focus is nowhere
                    if (event.defaultPrevented) {
                        return of(focusInZone || (focusNowhere && targetInZone));
                    }

                    // If mouseDown happened inside the zone and focus is outside we
                    // return true if target is not focusable or wait for focusIn
                    if (targetInZone && !focusInZone && actualTarget instanceof Element) {
                        // TODO: Remove generic after TypeScript uprade
                        return !isNativeMouseFocusable(actualTarget)
                            ? of(true)
                            : typedFromEvent<FocusEvent>(windowRef, 'focusin').pipe(
                                  take(1),
                                  mapTo(targetInZone),
                              );
                    }

                    // If focus is in the zone we wait for the next focusOut event and
                    // map it to either true or false, depending on if the mouseDown
                    // target is within the zone or not
                    if (focusInZone) {
                        // @bad TODO: Think of a way to handle this without side-effects
                        skipNextFocusOut = true;

                        return typedFromEvent(windowRef, 'focusout').pipe(
                            take(1),
                            mapTo(targetInZone),
                        );
                    }

                    return of(false);
                }),
            ),
        ).pipe(
            tap(() => {
                skipNextFocusOut = false;
            }),
            startWith(false),
            distinctUntilChanged(),
            skip(1),
            tuiZoneOptimized(ngZone),
        );
    }

    ngOnDestroy() {
        if (!!this.directParentActiveZone) {
            this.directParentActiveZone.removeSubActiveZone(this);
        }

        if (!!this.tuiActiveZoneParent) {
            this.tuiActiveZoneParent.removeSubActiveZone(this);
        }
    }

    contains(node: Node): boolean {
        return (
            this.element.nativeElement.contains(node) ||
            this.subActiveZones.some(
                (item, index, array) =>
                    array.indexOf(item) === index && item.contains(node),
            )
        );
    }

    private addSubActiveZone(activeZone: TuiActiveZoneDirective) {
        this.subActiveZones = [...this.subActiveZones, activeZone];
    }

    private removeSubActiveZone(activeZone: TuiActiveZoneDirective) {
        const index = this.subActiveZones.findIndex(item => item === activeZone);

        this.subActiveZones = [
            ...this.subActiveZones.slice(0, index),
            ...this.subActiveZones.slice(index + 1),
        ];
    }
}

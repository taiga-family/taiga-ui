import {DOCUMENT} from '@angular/common';
import {Directive, inject, type OnDestroy, type OnInit} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiGetNativeFocused} from '@taiga-ui/cdk/utils/focus';

@Directive({
    standalone: true,
    selector: '[tuiActiveZoneAdapter]',
    hostDirectives: [TuiActiveZone],
})
export class TuiActiveZoneAdapter implements OnDestroy, OnInit {
    private readonly current = inject(TuiActiveZone);
    private readonly parent = findActive(
        inject(TuiActiveZone, {skipSelf: true}),
        tuiGetNativeFocused(inject(DOCUMENT)),
    );

    public ngOnInit(): void {
        this.current.tuiActiveZoneParentSetter = this.parent;
    }

    public ngOnDestroy(): void {
        this.current.tuiActiveZoneParentSetter = null;
    }
}

function findActive(zone: TuiActiveZone, element: Element | null): TuiActiveZone | null {
    if (!element || !zone.contains(element)) {
        return null;
    }

    const active = zone['subActiveZones'].find((child) => child.contains(element));

    return active ? findActive(active, element) : zone;
}

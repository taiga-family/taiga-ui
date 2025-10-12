import {DOCUMENT} from '@angular/common';
import {Directive, inject, type OnDestroy, type OnInit} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiGetFocused} from '@taiga-ui/cdk/utils/focus';

@Directive({
    standalone: true,
    selector: '[tuiActiveZoneAdapter]',
    hostDirectives: [TuiActiveZone],
})
export class TuiActiveZoneAdapter implements OnDestroy, OnInit {
    private readonly current = inject(TuiActiveZone);
    private readonly parent = findActive(
        inject(TuiActiveZone, {skipSelf: true}),
        tuiGetFocused(inject(DOCUMENT)),
    );

    public ngOnInit(): void {
        this.current.tuiActiveZoneParentSetter = this.parent;
    }

    public ngOnDestroy(): void {
        this.current.tuiActiveZoneParentSetter = null;
    }
}

function findActive(zone: TuiActiveZone, el: Element | null): TuiActiveZone | null {
    if (!el || !zone.contains(el)) {
        return null;
    }

    const active = zone.children.find(
        (child) => !child['el'].matches('[tuiActiveZoneAdapter]') && child.contains(el),
    );

    return active ? findActive(active, el) : zone;
}

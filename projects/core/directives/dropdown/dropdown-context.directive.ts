import {DOCUMENT} from '@angular/common';
import {computed, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import {TUI_IS_TOUCH} from '@taiga-ui/cdk/tokens';
import {tuiGetActualTarget, tuiPointToClientRect} from '@taiga-ui/cdk/utils/dom';
import {tuiAsDriver, tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';
import {shouldCall} from '@taiga-ui/event-plugins';
import {merge} from 'rxjs';

import {TuiDropdownDriver} from './dropdown.driver';

function activeZoneFilter(this: TuiDropdownContext, event?: Event): boolean {
    return (
        !event ||
        (this.driver.value && !this.activeZone.contains(tuiGetActualTarget(event)))
    );
}

@Directive({
    selector: '[tuiDropdownContext]',
    providers: [
        TuiActiveZone,
        TuiDropdownDriver,
        tuiAsDriver(TuiDropdownDriver),
        tuiAsRectAccessor(TuiDropdownContext),
    ],
    host: {
        '[style.user-select]': 'userSelect()',
        '[style.-webkit-user-select]': 'userSelect()',
        '[style.-webkit-touch-callout]': 'userSelect()',
        '(document:keydown.esc)': 'closeDropdown()',
        '(longtap)': 'onContextMenu($event.detail.clientX, $event.detail.clientY)',
    },
})
export class TuiDropdownContext extends TuiRectAccessor {
    private readonly isTouch = inject(TUI_IS_TOUCH);
    private currentRect = EMPTY_CLIENT_RECT;

    protected readonly userSelect = computed(() => (this.isTouch() ? 'none' : null));
    protected readonly activeZone = inject(TuiActiveZone);
    protected readonly driver = inject(TuiDropdownDriver);
    protected readonly doc = inject(DOCUMENT);

    protected readonly sub = merge(
        tuiTypedFromEvent(this.doc, 'pointerdown'),
        tuiTypedFromEvent(this.doc, 'contextmenu', {capture: true}),
    )
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe((event: Event) => this.closeDropdown(event));

    public readonly type = 'dropdown';

    public getClientRect(): DOMRect {
        return this.currentRect;
    }

    @shouldCall(activeZoneFilter)
    protected closeDropdown(_event?: Event): void {
        this.driver.next(false);
        this.currentRect = EMPTY_CLIENT_RECT;
    }

    protected onContextMenu(x: number, y: number): void {
        this.currentRect = tuiPointToClientRect(x, y);
        this.driver.next(true);
    }
}

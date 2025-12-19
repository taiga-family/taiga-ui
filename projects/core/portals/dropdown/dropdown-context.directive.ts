import {DOCUMENT} from '@angular/common';
import {computed, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {WA_IS_TOUCH} from '@ng-web-apis/platform';
import {tuiGetActualTarget, tuiPointToClientRect} from '@taiga-ui/cdk/utils/dom';
import {tuiAsDriver, tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';
import {filter, merge} from 'rxjs';

import {TuiDropdownDriver} from './dropdown.driver';

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
        '(longtap)': 'onContextMenu($event.detail.clientX, $event.detail.clientY)',
    },
})
export class TuiDropdownContext extends TuiRectAccessor {
    private readonly isTouch = inject(WA_IS_TOUCH);
    private currentRect = EMPTY_CLIENT_RECT;

    protected readonly userSelect = computed(() => (this.isTouch() ? 'none' : null));
    protected readonly activeZone = inject(TuiActiveZone);
    protected readonly driver = inject(TuiDropdownDriver);
    protected readonly doc = inject(DOCUMENT);

    protected readonly sub = merge(
        tuiTypedFromEvent(this.doc, 'pointerdown'),
        tuiTypedFromEvent(this.doc, 'keydown').pipe(filter(({key}) => key === 'Escape')),
        tuiTypedFromEvent(this.doc, 'contextmenu', {capture: true}),
    )
        .pipe(
            filter(
                (event) =>
                    this.driver.value &&
                    !this.activeZone.contains(tuiGetActualTarget(event)),
            ),
            tuiZoneOptimized(),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            this.driver.next(false);
            this.currentRect = EMPTY_CLIENT_RECT;
        });

    public readonly type = 'dropdown';

    public getClientRect(): DOMRect {
        return this.currentRect;
    }

    protected onContextMenu(x: number, y: number): void {
        this.currentRect = tuiPointToClientRect(x, y);
        this.driver.next(true);
    }
}

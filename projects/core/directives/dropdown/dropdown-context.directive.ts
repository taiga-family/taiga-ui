import {computed, Directive, inject} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TUI_IS_IOS, TUI_IS_TOUCH} from '@taiga-ui/cdk/tokens';
import {tuiGetActualTarget, tuiPointToClientRect} from '@taiga-ui/cdk/utils/dom';
import {tuiAsDriver, tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';
import {shouldCall} from '@taiga-ui/event-plugins';

import {TuiDropdownDriver} from './dropdown.driver';

function activeZoneFilter(this: TuiDropdownContext, event?: Event): boolean {
    return !event || !this.activeZone.contains(tuiGetActualTarget(event));
}

const TAP_DELAY = 700;
const MOVE_THRESHOLD = 15;

@Directive({
    standalone: true,
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
        '(touchend.silent.passive)': 'onTouchEnd()',
        '(touchcancel.silent.passive)': 'onTouchEnd()',
        '(touchmove.silent.passive)':
            'onTouchMove($event.touches[0].clientX, $event.touches[0].clientY)',
        '(touchstart.silent.passive)':
            'onTouchStart($event.touches[0].clientX, $event.touches[0].clientY)',
        '(document:pointerdown.silent)': 'closeDropdown($event)',
        '(document:contextmenu.capture.silent)': 'closeDropdown($event)',
        '(document:keydown.esc)': 'closeDropdown()',
        '(contextmenu.prevent.stop)': 'onContextMenu($event.clientX, $event.clientY)',
    },
})
export class TuiDropdownContext extends TuiRectAccessor {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly isTouch = inject(TUI_IS_TOUCH);
    private readonly driver = inject(TuiDropdownDriver);
    private currentRect = EMPTY_CLIENT_RECT;
    private longTapTimeout: any = NaN;

    protected readonly userSelect = computed(() => (this.isTouch() ? 'none' : null));
    protected readonly activeZone = inject(TuiActiveZone);

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

    protected onTouchStart(x: number, y: number): void {
        if (!this.isIOS || !this.isTouch() || this.currentRect !== EMPTY_CLIENT_RECT) {
            return;
        }

        this.longTapTimeout = setTimeout(() => {
            this.currentRect = tuiPointToClientRect(x, y);
            this.driver.next(true);
        }, TAP_DELAY);
    }

    protected onTouchMove(x: number, y: number): void {
        if (
            this.isIOS &&
            this.isTouch() &&
            this.currentRect !== EMPTY_CLIENT_RECT &&
            Math.hypot(x - this.currentRect.x, y - this.currentRect.y) > MOVE_THRESHOLD
        ) {
            this.onTouchEnd();
        }
    }

    protected onTouchEnd(): void {
        clearTimeout(this.longTapTimeout);
    }
}

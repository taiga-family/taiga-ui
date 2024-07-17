import {computed, Directive, HostListener, inject} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TUI_IS_IOS, TUI_IS_TOUCH} from '@taiga-ui/cdk/tokens';
import {tuiPointToClientRect} from '@taiga-ui/cdk/utils/dom';
import {tuiAsDriver, tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';
import {shouldCall} from '@taiga-ui/event-plugins';

import {TuiDropdownDriver} from './dropdown.driver';

function activeZoneFilter(this: TuiDropdownContext, target: Element): boolean {
    return !this.activeZone.contains(target);
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

    @HostListener('contextmenu.prevent.stop', ['$event.clientX', '$event.clientY'])
    protected onContextMenu(x: number, y: number): void {
        this.currentRect = tuiPointToClientRect(x, y);
        this.driver.next(true);
    }

    @shouldCall(activeZoneFilter)
    @HostListener('document:pointerdown.silent', ['$event.target'])
    @HostListener('document:contextmenu.capture.silent', ['$event.target'])
    @HostListener('document:keydown.esc', ['$event.currentTarget'])
    protected closeDropdown(): void {
        this.driver.next(false);
        this.currentRect = EMPTY_CLIENT_RECT;
    }

    @HostListener('touchstart.silent.passive', [
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
    ])
    protected onTouchStart(x: number, y: number): void {
        if (!this.isIOS || !this.isTouch() || this.currentRect !== EMPTY_CLIENT_RECT) {
            return;
        }

        this.currentRect = tuiPointToClientRect(x, y);
        this.longTapTimeout = setTimeout(() => {
            this.driver.next(true);
        }, TAP_DELAY);
    }

    @HostListener('touchmove.silent.passive', [
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
    ])
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

    @HostListener('touchend.silent.passive')
    @HostListener('touchcancel.silent.passive')
    protected onTouchEnd(): void {
        clearTimeout(this.longTapTimeout);
    }
}

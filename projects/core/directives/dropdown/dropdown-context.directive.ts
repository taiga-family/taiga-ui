import {Directive, HostBinding, HostListener, Inject} from '@angular/core';
import {
    EMPTY_CLIENT_RECT,
    TUI_IS_IOS,
    TUI_TOUCH_SUPPORTED,
    TuiActiveZoneDirective,
    tuiPointToClientRect,
} from '@taiga-ui/cdk';
import {
    tuiAsDriver,
    tuiAsRectAccessor,
    TuiDriver,
    TuiRectAccessor,
} from '@taiga-ui/core/abstract';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {Subject} from 'rxjs';

function activeZoneFilter(this: TuiDropdownContextDirective, target: Element): boolean {
    return !this.activeZone.contains(target);
}

const TAP_DELAY = 700;
const MOVE_THRESHOLD = 15;

@Directive({
    selector: '[tuiDropdown][tuiDropdownContext]',
    providers: [
        TuiActiveZoneDirective,
        tuiAsDriver(TuiDropdownContextDirective),
        tuiAsRectAccessor(TuiDropdownContextDirective),
    ],
})
export class TuiDropdownContextDirective extends TuiDriver implements TuiRectAccessor {
    private readonly stream$ = new Subject<boolean>();

    private currentRect = EMPTY_CLIENT_RECT;
    private longTapTimeout: any = NaN;

    readonly type = 'dropdown';

    constructor(
        @Inject(TuiActiveZoneDirective)
        readonly activeZone: TuiActiveZoneDirective,
        @Inject(TUI_IS_IOS)
        readonly isIOS: boolean,
        @Inject(TUI_TOUCH_SUPPORTED)
        readonly isTouch: boolean,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    @HostBinding('style.user-select')
    @HostBinding('style.-webkit-touch-callout')
    @HostBinding('style.-webkit-user-select')
    get userSelect(): string | null {
        return this.isTouch ? 'none' : null;
    }

    @HostListener('contextmenu.prevent.stop', ['$event.clientX', '$event.clientY'])
    onContextMenu(x: number, y: number): void {
        this.currentRect = tuiPointToClientRect(x, y);
        this.stream$.next(true);
    }

    @shouldCall(activeZoneFilter)
    @HostListener('document:click.silent', ['$event.target'])
    @HostListener('document:contextmenu.capture.silent', ['$event.target'])
    @HostListener('document:keydown.esc', ['$event.currentTarget'])
    closeDropdown(): void {
        this.stream$.next(false);
        this.currentRect = EMPTY_CLIENT_RECT;
    }

    @HostListener('touchmove.silent.passive', [
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
    ])
    onTouchMove(x: number, y: number): void {
        if (
            this.isIOS &&
            this.isTouch &&
            this.currentRect !== EMPTY_CLIENT_RECT &&
            Math.hypot(x - this.currentRect.x, y - this.currentRect.y) > MOVE_THRESHOLD
        ) {
            this.onTouchEnd();
        }
    }

    @HostListener('touchstart.silent.passive', [
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
    ])
    onTouchStart(x: number, y: number): void {
        if (!this.isIOS || !this.isTouch || this.currentRect !== EMPTY_CLIENT_RECT) {
            return;
        }

        this.currentRect = tuiPointToClientRect(x, y);
        this.longTapTimeout = setTimeout(() => {
            this.stream$.next(true);
        }, TAP_DELAY);
    }

    @HostListener('touchend.silent.passive')
    @HostListener('touchcancel.silent.passive')
    onTouchEnd(): void {
        if (this.isIOS && this.isTouch) {
            clearTimeout(this.longTapTimeout);
        }
    }

    getClientRect(): ClientRect {
        return this.currentRect;
    }
}

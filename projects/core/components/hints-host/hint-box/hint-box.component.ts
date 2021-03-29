import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    NgZone,
    ViewChild,
} from '@angular/core';
import {ANIMATION_FRAME, WINDOW} from '@ng-web-apis/common';
import {
    px,
    TUI_IS_MOBILE,
    tuiDefaultProp,
    TuiDestroyService,
    tuiPure,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {TuiPointerHintDirective} from '@taiga-ui/core/directives/pointer-hint';
import {TuiHintMode} from '@taiga-ui/core/enums';
import {TuiDirection} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TuiHintsHostComponent} from '../hints-host.component';

const SPACE = 8;
const BORDER_WIDTH = 1;
const LEFT_PADDING = 16;
const TOP_PADDING = 12;
const ARROW_SIZE = 8;
const ARROW_OFFSET = 16;
const ARROWHEAD_OFFSET = ARROW_OFFSET + (ARROW_SIZE * Math.sqrt(2)) / 2;
const reverseDirectionsVertical: {[key in TuiDirection]: TuiDirection} = {
    'top-left': 'bottom-left',
    'top-right': 'bottom-right',
    'bottom-left': 'top-left',
    'bottom-right': 'top-right',
    left: 'right',
    right: 'left',
};
const reverseDirectionsHorizontal: {[key in TuiDirection]: TuiDirection} = {
    'top-left': 'top-right',
    'top-right': 'top-left',
    'bottom-left': 'bottom-right',
    'bottom-right': 'bottom-left',
    left: 'right',
    right: 'left',
};

// TODO: consider abstracting UI and move to CDK
// Ambient type cannot be used without dynamic https://github.com/angular/angular/issues/23395
// @dynamic
@Component({
    selector: 'tui-hint-box',
    templateUrl: './hint-box.template.html',
    styleUrls: ['./hint-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiHintBoxComponent {
    @Input()
    hint?: AbstractTuiHint;

    @Input()
    @tuiDefaultProp()
    direction: TuiDirection = 'bottom-left';

    @Input()
    @HostBinding('attr.data-mode')
    @tuiDefaultProp()
    mode: TuiHintMode | null = null;

    @ViewChild('arrow')
    private readonly arrow?: ElementRef<HTMLElement>;

    constructor(
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(TuiHintsHostComponent)
        private readonly hintsHost: TuiHintsHostComponent,
    ) {
        animationFrame$.pipe(tuiZonefree(ngZone), takeUntil(destroy$)).subscribe(() => {
            this.calculatePosition();
        });
    }

    @tuiPure
    @HostBinding('class._untouchable')
    get isUntouchable(): boolean {
        return this.hint instanceof TuiPointerHintDirective;
    }

    /**
     * Calculates wrapper position.
     * Styles are set directly to avoid visual shake of element
     */
    private calculatePosition() {
        if (this.mode !== TuiHintMode.Overflow) {
            this.calculateCoordinates();
        } else {
            this.setOverflowStyles();
        }
    }

    private calculateCoordinates() {
        if (this.isMobile) {
            this.calculateMobileCoordinates();

            return;
        }

        if (!this.hint) {
            throw new Error('Hint directive is missing');
        }

        const hostRect = this.hint.getElementClientRect();
        const portalRect = this.hintsHost.clientRect;
        const tooltip = this.elementRef.nativeElement;
        const {style} = tooltip;
        const tooltipRect = tooltip.getBoundingClientRect();
        const isHostLong = hostRect.width > ARROWHEAD_OFFSET * 2;
        const directions: TuiDirection[] = [
            'left',
            'right',
            'bottom-left',
            'bottom-right',
            'top-left',
            'top-right',
        ];

        let top = 0;
        let left = 0;
        let {direction} = this;

        const horizontalTop =
            hostRect.top + hostRect.height / 2 - tooltipRect.height / 2 - portalRect.top;
        const horizontalLeft =
            hostRect.left - tooltipRect.width - SPACE - portalRect.left;
        const horizontalRight = hostRect.left + hostRect.width + SPACE - portalRect.left;
        const verticalBottom = hostRect.bottom + SPACE - portalRect.top;
        const verticalTop = hostRect.top - tooltipRect.height - SPACE - portalRect.top;
        const verticalRight = isHostLong
            ? hostRect.left - portalRect.left
            : hostRect.left + hostRect.width / 2 - ARROWHEAD_OFFSET - portalRect.left;
        const verticalLeft = isHostLong
            ? hostRect.left - tooltipRect.width + hostRect.width - portalRect.left
            : hostRect.left -
              tooltipRect.width +
              hostRect.width / 2 +
              ARROWHEAD_OFFSET -
              portalRect.left;

        directions.splice(directions.indexOf(direction), 1);

        while (true) {
            switch (direction) {
                case 'left':
                    top = horizontalTop;
                    left = horizontalLeft;
                    break;
                case 'right':
                    top = horizontalTop;
                    left = horizontalRight;
                    break;
                case 'top-right':
                    top = verticalTop;
                    left = verticalRight;
                    break;
                case 'top-left':
                    top = verticalTop;
                    left = verticalLeft;
                    break;
                case 'bottom-right':
                    top = verticalBottom;
                    left = verticalRight;
                    break;
                case 'bottom-left':
                    top = verticalBottom;
                    left = verticalLeft;
                    break;
            }

            const verticalFit =
                top + portalRect.top > SPACE &&
                top + tooltipRect.height + SPACE + portalRect.top <
                    this.windowRef.innerHeight;
            const horizontalFit =
                left > SPACE &&
                left + tooltipRect.width + SPACE + portalRect.left < portalRect.width;

            if (directions.length === 0 || (verticalFit && horizontalFit)) {
                break;
            }

            direction = verticalFit
                ? reverseDirectionsHorizontal[direction]
                : reverseDirectionsVertical[direction];
            direction =
                directions.splice(directions.indexOf(direction), 1)[0] || direction;
        }

        style.top = px(top);
        style.left = px(left);

        tooltip.setAttribute('data-tui-host-direction', direction);
    }

    private calculateMobileCoordinates() {
        if (!this.hint) {
            throw new Error('Hint directive is missing');
        }

        const hostRect = this.hint.getElementClientRect();
        const portalRect = this.hintsHost.clientRect;
        const tooltip = this.elementRef.nativeElement;
        const {style} = tooltip;
        const tooltipRect = tooltip.getBoundingClientRect();
        const verticalTop = hostRect.top - tooltipRect.height - SPACE - portalRect.top;
        const verticalBottom = hostRect.bottom + SPACE - portalRect.top;
        const verticalTopFit =
            verticalTop + portalRect.top > SPACE &&
            hostRect.top < this.windowRef.innerHeight;
        const verticalBottomFit =
            hostRect.bottom > 0 &&
            hostRect.bottom + 2 * SPACE + tooltipRect.height < this.windowRef.innerHeight;
        const direction =
            (this.direction.includes('top') && verticalTopFit) || !verticalBottomFit
                ? 'top'
                : 'bottom';
        const attemptedLeft =
            portalRect.left + hostRect.left + hostRect.width / 2 - tooltipRect.width / 2;
        const left = Math.max(
            attemptedLeft + tooltipRect.width + SPACE > portalRect.right
                ? portalRect.right - SPACE - tooltipRect.width
                : attemptedLeft,
            SPACE * 2,
        );

        style.left = px(left);
        style.top = direction === 'top' ? px(verticalTop) : px(verticalBottom);

        if (this.arrow) {
            this.arrow.nativeElement.style.left = px(
                hostRect.left <= SPACE * 2 && hostRect.width > ARROW_OFFSET * 2
                    ? ARROW_OFFSET
                    : hostRect.left + hostRect.width / 2 - left - ARROW_SIZE / 2,
            );
        }

        tooltip.setAttribute('data-tui-host-direction', direction);
    }

    private setOverflowStyles() {
        if (!this.hint) {
            throw new Error('Hint directive is missing');
        }

        const hostRect = this.hint.getElementClientRect();
        const {style} = this.elementRef.nativeElement;

        style.top = px(hostRect.top - window.innerHeight - TOP_PADDING - BORDER_WIDTH);
        style.left = px(hostRect.left - LEFT_PADDING - BORDER_WIDTH);
        style.width = px(hostRect.width + LEFT_PADDING * 2 + BORDER_WIDTH * 2);
    }
}

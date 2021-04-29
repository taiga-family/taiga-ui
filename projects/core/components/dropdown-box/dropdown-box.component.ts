import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    NgZone,
    ViewChild,
} from '@angular/core';
import {USER_AGENT, WINDOW} from '@ng-web-apis/common';
import {
    getClosestElement,
    getClosestFocusable,
    inRange,
    isIE,
    POLLING_TIME,
    px,
    setNativeFocused,
    TuiDestroyService,
    TuiOverscrollMode,
    TuiPortalHostComponent,
    tuiPure,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {tuiDropdownAnimation} from '@taiga-ui/core/animations';
import {DEFAULT_MARGIN, DEFAULT_MAX_WIDTH} from '@taiga-ui/core/constants';
import {TuiDropdownAnimation, TuiDropdownWidth} from '@taiga-ui/core/enums';
import {TuiDropdown} from '@taiga-ui/core/interfaces';
import {TUI_DROPDOWN_DIRECTIVE} from '@taiga-ui/core/tokens';
import {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core/types';
import {getScreenWidth} from '@taiga-ui/core/utils/dom';
import {fromEvent, interval, merge} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 *  This component is used to show template in a portal using default style of white rounded box with a shadow
 */
// @bad TODO: OnPush
// Ambient type cannot be used without dynamic https://github.com/angular/angular/issues/23395
// @dynamic
@Component({
    selector: 'tui-dropdown-box',
    templateUrl: './dropdown-box.template.html',
    styleUrls: ['./dropdown-box.style.less'],
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDestroyService],
    animations: [tuiDropdownAnimation],
})
export class TuiDropdownBoxComponent implements AfterViewChecked {
    @HostBinding('@tuiDropdownAnimation')
    dropdownAnimation!: TuiDropdownAnimation;

    /**
     * Is previous position on top (to prevent jumping up and down on scroll)
     */
    private prevDirectionIsTop = false;

    @ViewChild('content', {read: ElementRef})
    readonly contentElementRef?: ElementRef<HTMLElement>;

    constructor(
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TUI_DROPDOWN_DIRECTIVE) readonly directive: TuiDropdown,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiPortalHostComponent)
        private readonly portalHost: TuiPortalHostComponent,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {
        merge(
            interval(POLLING_TIME),
            this.directive.refresh$,
            fromEvent(this.windowRef, 'resize'),
        )
            .pipe(tuiZonefree(ngZone), takeUntil(destroy$))
            .subscribe(() => {
                this.calculatePositionAndSize();
            });
    }

    ngAfterViewChecked() {
        this.calculatePositionAndSize();
    }

    onTopFocus() {
        this.moveFocusOutside(true);
    }

    onBottomFocus() {
        this.moveFocusOutside(false);
    }

    get overscroll(): TuiOverscrollMode {
        return this.inModal ? TuiOverscrollMode.All : TuiOverscrollMode.Scroll;
    }

    @tuiPure
    private get inModal(): boolean {
        // @awful TODO: get rid of component tag name dependency
        return !!getClosestElement(this.directive.host, 'tui-dialog-host');
    }

    private calculatePositionAndSize() {
        const {clientRect} = this.directive;
        const {style} = this.elementRef.nativeElement;
        const hostRect = this.directive.fixed
            ? this.portalHost.fixedPositionOffset()
            : this.portalHost.clientRect;

        style.position = this.directive.fixed ? 'fixed' : 'absolute';

        this.calculateVerticalPosition(style, clientRect, hostRect);
        this.calculateHorizontalPosition(style, clientRect, hostRect);
        this.calculateWidth(style, clientRect);
    }

    private getFinalAlign(
        style: CSSStyleDeclaration,
        directiveRect: ClientRect,
    ): TuiHorizontalDirection {
        const dropdownRect = this.elementRef.nativeElement.getBoundingClientRect();
        const dropdownWidth = this.elementRef.nativeElement.offsetWidth;
        const screenWidth = getScreenWidth(this.windowRef.document);
        const isDropdownSizeHypotheticallyFitsViewport =
            directiveRect.left + dropdownWidth < screenWidth ||
            directiveRect.right - dropdownWidth > 0;
        const isDropdownSizeActuallyFitsViewport =
            dropdownRect.right <= screenWidth && dropdownRect.left >= 0;
        let finalAlign: TuiHorizontalDirection = this.directive.align;

        switch (this.directive.align) {
            case 'left':
                if (
                    isDropdownSizeHypotheticallyFitsViewport &&
                    dropdownRect.right > screenWidth
                ) {
                    finalAlign = 'right';
                }

                break;
            case 'right':
                if (isDropdownSizeHypotheticallyFitsViewport && dropdownRect.left < 0) {
                    finalAlign = 'left';
                }

                break;
        }

        if (style.right === 'auto' && isDropdownSizeActuallyFitsViewport) {
            finalAlign = 'left';
        }

        if (style.left === 'auto' && isDropdownSizeActuallyFitsViewport) {
            finalAlign = 'right';
        }

        return finalAlign;
    }

    /**
     * Calculates horizontal position
     *
     * @param style dropdownBox elementRef styles object
     * @param directiveRect ClientRect of hosting directive
     * @param hostRect ClientRect of  portal host
     */
    private calculateHorizontalPosition(
        style: CSSStyleDeclaration,
        directiveRect: ClientRect,
        hostRect: ClientRect,
    ) {
        const offset = this.directive.sided
            ? this.elementRef.nativeElement.getBoundingClientRect().width + DEFAULT_MARGIN
            : 0;
        const left = Math.ceil(directiveRect.left - hostRect.left - offset);
        const right = Math.floor(hostRect.right - directiveRect.right - offset);

        switch (this.getFinalAlign(style, directiveRect)) {
            case 'left':
                if (
                    right + DEFAULT_MARGIN > this.windowRef.innerWidth ||
                    inRange(left + DEFAULT_MARGIN, 0, this.windowRef.innerWidth)
                ) {
                    style.left = px(left);
                    style.right = 'auto';
                } else {
                    style.left = 'auto';
                    style.right = px(right);
                }

                break;
            case 'right':
                if (
                    inRange(right + DEFAULT_MARGIN, 0, this.windowRef.innerWidth) ||
                    left + DEFAULT_MARGIN > this.windowRef.innerWidth
                ) {
                    style.left = 'auto';
                    style.right = px(right);
                } else {
                    style.left = px(left);
                    style.right = 'auto';
                }

                break;
        }
    }

    /**
     * Calculates vertical position and height
     *
     * @param style dropdownBox elementRef styles object
     * @param directiveRect ClientRect of hosting directive
     * @param hostRect ClientRect of  portal host
     */
    private calculateVerticalPosition(
        style: CSSStyleDeclaration,
        directiveRect: ClientRect,
        hostRect: ClientRect,
    ) {
        const windowHeight = this.windowRef.innerHeight;
        // Maximum height of the box
        const boxHeightLimit = Math.min(
            this.directive.maxHeight,
            windowHeight - DEFAULT_MARGIN * 2,
        );
        const offset = this.directive.sided
            ? DEFAULT_MARGIN - directiveRect.height
            : DEFAULT_MARGIN * 2;
        const topAvailableHeight = directiveRect.top - offset;
        const bottomAvailableHeight = windowHeight - directiveRect.bottom - offset;
        const finalDirection = this.getFinalDirection(directiveRect);

        this.prevDirectionIsTop = finalDirection === 'top';

        if (finalDirection === 'top') {
            this.dropdownAnimation = TuiDropdownAnimation.FadeInBottom;

            style.maxHeight = px(Math.min(boxHeightLimit, topAvailableHeight));
            style.top = 'auto';
            style.bottom = px(
                hostRect.bottom - directiveRect.top - DEFAULT_MARGIN + offset,
            );
        } else {
            this.dropdownAnimation = TuiDropdownAnimation.FadeInTop;

            style.maxHeight = px(Math.min(boxHeightLimit, bottomAvailableHeight));
            style.top = px(directiveRect.bottom - hostRect.top - DEFAULT_MARGIN + offset);
            style.bottom = 'auto';
        }
    }

    private getFinalDirection(directiveRect: ClientRect): TuiVerticalDirection | null {
        const windowHeight = this.windowRef.innerHeight;
        const offset = this.directive.sided
            ? DEFAULT_MARGIN - directiveRect.height
            : DEFAULT_MARGIN * 2;

        // Maximum space available on top and on the bottom in the viewport
        const topAvailableHeight = directiveRect.top - offset;
        const bottomAvailableHeight = windowHeight - directiveRect.bottom - offset;

        let finalDirection: TuiVerticalDirection | null = null;

        // Given direction is applied if we can fit the box in the limits that way
        switch (this.directive.direction) {
            case 'top':
                if (topAvailableHeight >= this.directive.minHeight) {
                    finalDirection = 'top';
                }

                break;
            case 'bottom':
                if (bottomAvailableHeight >= this.directive.minHeight) {
                    finalDirection = 'bottom';
                }

                break;
        }

        // Maximum height of the box
        const boxHeightLimit = Math.min(
            this.directive.maxHeight,
            windowHeight - DEFAULT_MARGIN * 2,
        );

        // Choose direction if given direction did not fit
        if (finalDirection === null && this.contentElementRef) {
            // Box height if it fits without scroll
            const visualHeight = Math.min(
                this.contentElementRef.nativeElement.getBoundingClientRect().height +
                    (this.elementRef.nativeElement.offsetHeight -
                        this.elementRef.nativeElement.clientHeight),
                boxHeightLimit,
            );

            // If there is enough space to fit below without scroll,
            // choose 'bottom', unless it was previously on the top
            if (this.prevDirectionIsTop && topAvailableHeight >= visualHeight) {
                finalDirection = 'top';
            } else if (bottomAvailableHeight >= visualHeight) {
                finalDirection = 'bottom';
            } else {
                // Corner case — select direction with more space
                finalDirection =
                    bottomAvailableHeight >= topAvailableHeight ? 'bottom' : 'top';
            }
        }

        return finalDirection;
    }

    /**
     * Calculates width
     *
     * @param style dropdownBox elementRef styles object
     * @param directiveRect ClientRect of hosting directive
     */
    private calculateWidth(style: CSSStyleDeclaration, directiveRect: ClientRect) {
        style.width =
            this.directive.limitMinWidth === TuiDropdownWidth.Fixed &&
            !this.directive.sided
                ? px(directiveRect.width)
                : '';

        if (
            isIE(this.userAgent) &&
            this.directive.limitMinWidth === TuiDropdownWidth.Min &&
            !this.directive.sided
        ) {
            style.width = px(DEFAULT_MAX_WIDTH);

            return;
        }

        if (
            this.directive.limitMinWidth === TuiDropdownWidth.Min &&
            !this.directive.sided
        ) {
            style.minWidth = px(directiveRect.width);
            style.maxWidth = px(DEFAULT_MAX_WIDTH);

            return;
        }

        style.minWidth = '';
        style.maxWidth = '';
    }

    private moveFocusOutside(previous: boolean) {
        const {host} = this.directive;
        const {ownerDocument} = host;
        const root = ownerDocument ? ownerDocument.body : host;

        let focusable = getClosestFocusable(host, previous, root);

        while (focusable !== null && host.contains(focusable)) {
            focusable = getClosestFocusable(focusable, previous, root);
        }

        if (focusable === null) {
            return;
        }

        setNativeFocused(focusable);
    }
}

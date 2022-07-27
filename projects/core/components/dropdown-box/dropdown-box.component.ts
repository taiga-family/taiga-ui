import {AnimationOptions} from '@angular/animations';
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
import {ANIMATION_FRAME, WINDOW} from '@ng-web-apis/common';
import {
    AbstractTuiPortalHostComponent,
    getClosestFocusable,
    inRange,
    POLLING_TIME,
    px,
    TuiActiveZoneDirective,
    tuiAssertIsHTMLElement,
    TuiDestroyService,
    TuiDropdownHostComponent,
    TuiOverscrollModeT,
    tuiPure,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {tuiDropdownAnimation} from '@taiga-ui/core/animations';
import {DEFAULT_MARGIN, DEFAULT_MAX_WIDTH} from '@taiga-ui/core/constants';
import {TuiDropdownAnimation} from '@taiga-ui/core/enums';
import {TuiAnimationOptions, TuiDropdown} from '@taiga-ui/core/interfaces';
import {TUI_ANIMATION_OPTIONS, TUI_DROPDOWN_DIRECTIVE} from '@taiga-ui/core/tokens';
import {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core/types';
import {getScreenWidth, tuiGetViewportWidth} from '@taiga-ui/core/utils/dom';
import {fromEvent, merge, Observable} from 'rxjs';
import {takeUntil, throttleTime} from 'rxjs/operators';

/**
 *  This component is used to show template in a portal using default style of white rounded box with a shadow
 */
// @bad TODO: OnPush
// Ambient type cannot be used without dynamic https://github.com/angular/angular/issues/23395
// @dynamic
@Component({
    selector: `tui-dropdown-box`,
    templateUrl: `./dropdown-box.template.html`,
    styleUrls: [`./dropdown-box.style.less`],
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDestroyService],
    animations: [tuiDropdownAnimation],
})
export class TuiDropdownBoxComponent implements AfterViewChecked {
    private readonly animationTop = {
        value: TuiDropdownAnimation.FadeInTop,
        ...this.options,
    };

    private readonly animationBottom = {
        value: TuiDropdownAnimation.FadeInBottom,
        ...this.options,
    };

    /**
     * Is previous position on top (to prevent jumping up and down on scroll)
     */
    private prevDirectionIsTop = false;

    @HostBinding(`@tuiDropdownAnimation`)
    dropdownAnimation!: TuiAnimationOptions;

    @ViewChild(`content`, {read: ElementRef})
    readonly contentElementRef?: ElementRef<HTMLElement>;

    constructor(
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TUI_DROPDOWN_DIRECTIVE) readonly directive: TuiDropdown,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(AbstractTuiPortalHostComponent)
        private readonly portalHost: TuiDropdownHostComponent,
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        merge(
            animationFrame$.pipe(throttleTime(POLLING_TIME)),
            this.directive.refresh$,
            fromEvent(this.windowRef, `resize`),
        )
            .pipe(tuiZonefree(ngZone), takeUntil(destroy$))
            .subscribe(() => {
                this.calculatePositionAndSize();
            });
    }

    get overscroll(): TuiOverscrollModeT {
        return this.inModal ? `all` : `scroll`;
    }

    @tuiPure
    getContext<T extends object>(
        context?: T,
        activeZone?: TuiActiveZoneDirective,
    ):
        | (T & {activeZone?: TuiActiveZoneDirective})
        | {activeZone?: TuiActiveZoneDirective} {
        return {...context, activeZone};
    }

    ngAfterViewChecked(): void {
        this.calculatePositionAndSize();
    }

    onTopFocus(): void {
        this.moveFocusOutside(true);
    }

    onBottomFocus(): void {
        this.moveFocusOutside(false);
    }

    @tuiPure
    private get inModal(): boolean {
        // @awful TODO: get rid of component tag name dependency
        return !!this.directive.host.closest(`tui-dialog-host`);
    }

    @tuiPure
    private get inOption(): boolean {
        // @awful TODO: get rid of component tag name dependency
        return !!this.directive.host.closest(`[tuiOption]`);
    }

    private calculatePositionAndSize(): void {
        const {clientRect} = this.directive;
        const {style} = this.elementRef.nativeElement;
        const hostRect = this.directive.fixed
            ? this.portalHost.fixedPositionOffset()
            : this.portalHost.clientRect;

        style.position = this.directive.fixed ? `fixed` : `absolute`;

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
            case `left`:
                if (
                    isDropdownSizeHypotheticallyFitsViewport &&
                    dropdownRect.right > screenWidth
                ) {
                    finalAlign = `right`;
                }

                break;
            case `right`:
                if (isDropdownSizeHypotheticallyFitsViewport && dropdownRect.left < 0) {
                    finalAlign = `left`;
                }

                break;
        }

        if (style.right === `auto` && isDropdownSizeActuallyFitsViewport) {
            finalAlign = `left`;
        }

        if (style.left === `auto` && isDropdownSizeActuallyFitsViewport) {
            finalAlign = `right`;
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
    ): void {
        const offset = this.directive.sided
            ? this.elementRef.nativeElement.getBoundingClientRect().width + DEFAULT_MARGIN
            : 0;
        const left = Math.ceil(directiveRect.left - hostRect.left - offset);
        const right = Math.floor(hostRect.right - directiveRect.right - offset);
        const viewportWidth = tuiGetViewportWidth(this.windowRef);

        switch (this.getFinalAlign(style, directiveRect)) {
            case `left`:
                if (
                    right + DEFAULT_MARGIN > viewportWidth ||
                    inRange(left + DEFAULT_MARGIN, 0, viewportWidth)
                ) {
                    style.left = px(left);
                    style.right = `auto`;
                } else {
                    style.left = `auto`;
                    style.right = px(right);
                }

                break;
            case `right`:
                if (
                    inRange(right + DEFAULT_MARGIN, 0, viewportWidth) ||
                    left + DEFAULT_MARGIN > viewportWidth
                ) {
                    style.left = `auto`;
                    style.right = px(right);
                } else {
                    style.left = px(left);
                    style.right = `auto`;
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
    ): void {
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
        const optionOffset = this.inOption ? DEFAULT_MARGIN * 2 : 0;

        this.prevDirectionIsTop = finalDirection === `top`;

        if (finalDirection === `top`) {
            this.dropdownAnimation = this.animationBottom;

            style.maxHeight = px(Math.min(boxHeightLimit, topAvailableHeight));
            style.top = `auto`;
            style.bottom = px(
                hostRect.bottom -
                    directiveRect.top -
                    DEFAULT_MARGIN +
                    offset -
                    optionOffset,
            );
        } else {
            this.dropdownAnimation = this.animationTop;

            style.maxHeight = px(Math.min(boxHeightLimit, bottomAvailableHeight));
            style.top = px(
                directiveRect.bottom -
                    hostRect.top -
                    DEFAULT_MARGIN +
                    offset -
                    optionOffset,
            );
            style.bottom = `auto`;
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
            case `top`:
                if (topAvailableHeight >= this.directive.minHeight) {
                    finalDirection = `top`;
                }

                break;
            case `bottom`:
                if (bottomAvailableHeight >= this.directive.minHeight) {
                    finalDirection = `bottom`;
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
                finalDirection = `top`;
            } else if (bottomAvailableHeight >= visualHeight) {
                finalDirection = `bottom`;
            } else {
                // Corner case — select direction with more space
                finalDirection =
                    bottomAvailableHeight >= topAvailableHeight ? `bottom` : `top`;
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
    private calculateWidth(style: CSSStyleDeclaration, directiveRect: ClientRect): void {
        style.width =
            this.directive.limitMinWidth === `fixed` && !this.directive.sided
                ? px(directiveRect.width)
                : ``;

        if (this.directive.limitMinWidth === `min` && !this.directive.sided) {
            style.minWidth = px(directiveRect.width);
            style.maxWidth = px(DEFAULT_MAX_WIDTH);

            return;
        }

        style.minWidth = ``;
        style.maxWidth = ``;
    }

    private moveFocusOutside(previous: boolean): void {
        const {host} = this.directive;
        const {ownerDocument} = host;
        const root = ownerDocument ? ownerDocument.body : host;

        tuiAssertIsHTMLElement(host);

        let focusable = getClosestFocusable(host, previous, root);

        while (focusable !== null && host.contains(focusable)) {
            focusable = getClosestFocusable(focusable, previous, root);
        }

        focusable?.focus();
    }
}

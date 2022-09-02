import type {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Optional,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    AbstractTuiPortalHostComponent,
    TuiDestroyService,
    tuiGetClosestFocusable,
    tuiPx,
} from '@taiga-ui/cdk';
import {TuiRectAccessor} from '@taiga-ui/core/abstract';
import {tuiDropdownAnimation} from '@taiga-ui/core/animations';
import {TuiDropdownAnimation} from '@taiga-ui/core/enums';
import {TuiPositionService} from '@taiga-ui/core/services';
import {TUI_ANIMATION_OPTIONS} from '@taiga-ui/core/tokens';
import {takeUntil} from 'rxjs/operators';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownHoverDirective} from './dropdown-hover.directive';
import {
    TUI_DROPDOWN_OFFSET,
    TUI_DROPDOWN_OPTIONS,
    TuiDropdownOptions,
} from './dropdown-options.directive';

/**
 *  This component is used to show template in a portal using default style of white rounded box with a shadow
 */
// @bad TODO: OnPush
@Component({
    selector: `tui-dropdown`,
    templateUrl: `./dropdown.template.html`,
    styleUrls: [`./dropdown.style.less`],
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDestroyService, TuiPositionService],
    animations: [tuiDropdownAnimation],
})
export class TuiDropdownComponent {
    @HostBinding(`@tuiDropdownAnimation`)
    readonly dropdownAnimation = {
        value: TuiDropdownAnimation.FadeInTop,
        ...this.animationOptions,
    };

    constructor(
        @Inject(TuiPositionService) position$: TuiPositionService,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(TuiDropdownDirective) readonly directive: TuiDropdownDirective,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(AbstractTuiPortalHostComponent)
        private readonly host: AbstractTuiPortalHostComponent,
        @Inject(TuiRectAccessor) private readonly accessor: TuiRectAccessor,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TUI_ANIMATION_OPTIONS)
        private readonly animationOptions: AnimationOptions,
        @Inject(TUI_DROPDOWN_OPTIONS) private readonly options: TuiDropdownOptions,
        @Optional()
        @Inject(TuiDropdownHoverDirective)
        private readonly hoverDirective: TuiDropdownHoverDirective | null,
    ) {
        position$.pipe(takeUntil(destroy$)).subscribe(([top, left]) => {
            this.update(top, left);
        });
    }

    onHoveredChange(hovered: boolean): void {
        if (this.hoverDirective) {
            this.hoverDirective.toggle(hovered);
        }
    }

    onTopFocus(): void {
        this.moveFocusOutside(true);
    }

    onBottomFocus(): void {
        this.moveFocusOutside(false);
    }

    private update(top: number, left: number): void {
        const {style} = this.elementRef.nativeElement;
        const {right} = this.elementRef.nativeElement.getBoundingClientRect();
        const {limitWidth, maxHeight} = this.options;
        const {innerHeight} = this.windowRef;
        const {clientRect} = this.host;
        const {position} = this.directive;
        const rect = this.accessor.getClientRect();
        const offsetX = position === `fixed` ? 0 : -clientRect.left;
        const offsetY = position === `fixed` ? 0 : -clientRect.top;

        top = top + offsetY;
        left = left + offsetX;

        const isIntersecting =
            left < rect.right &&
            right > rect.left &&
            top < offsetY + 2 * TUI_DROPDOWN_OFFSET;
        const available = isIntersecting
            ? rect.top - 2 * TUI_DROPDOWN_OFFSET
            : offsetY + innerHeight - top - TUI_DROPDOWN_OFFSET;

        style.position = position;
        style.top = tuiPx(Math.max(top, offsetY + TUI_DROPDOWN_OFFSET));
        style.left = tuiPx(left);
        style.maxHeight = tuiPx(Math.min(maxHeight, available));
        style.width = ``;
        style.minWidth = ``;

        switch (limitWidth) {
            case `min`:
                style.minWidth = tuiPx(rect.width);
                break;
            case `fixed`:
                style.width = tuiPx(rect.width);
        }
    }

    private moveFocusOutside(previous: boolean): void {
        const host = document.createElement(`div`);
        const {ownerDocument} = host;
        const root = ownerDocument ? ownerDocument.body : host;
        let focusable = tuiGetClosestFocusable({initial: host, root, previous});

        while (focusable !== null && host.contains(focusable)) {
            focusable = tuiGetClosestFocusable({initial: focusable, root, previous});
        }

        focusable?.focus();
    }
}

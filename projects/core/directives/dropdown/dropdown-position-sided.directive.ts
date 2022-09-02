import {Directive, Inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import type {TuiPositionAccessor} from '@taiga-ui/core/abstract';
import {tuiAsPositionAccessor, TuiRectAccessor} from '@taiga-ui/core/abstract';
import type {TuiPoint} from '@taiga-ui/core/types';

import {
    TUI_DROPDOWN_OFFSET,
    TUI_DROPDOWN_OPTIONS,
    TuiDropdownOptions,
} from './dropdown-options.directive';

@Directive({
    selector: `[tuiDropdownSided]`,
    providers: [tuiAsPositionAccessor(TuiDropdownPositionSidedDirective)],
})
export class TuiDropdownPositionSidedDirective implements TuiPositionAccessor {
    private previous = this.options.direction || `bottom`;

    constructor(
        @Inject(TUI_DROPDOWN_OPTIONS) private readonly options: TuiDropdownOptions,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TuiRectAccessor) private readonly accessor: TuiRectAccessor,
    ) {}

    getPosition({height, width}: ClientRect): TuiPoint {
        const hostRect = this.accessor.getClientRect();
        const {innerHeight, innerWidth} = this.windowRef;
        const {align, direction, minHeight} = this.options;
        const available = {
            top: hostRect.bottom,
            left: hostRect.left - TUI_DROPDOWN_OFFSET,
            right: innerWidth - hostRect.right - TUI_DROPDOWN_OFFSET,
            bottom: innerHeight - hostRect.top,
        } as const;
        const position = {
            top: hostRect.bottom - height + 2 * TUI_DROPDOWN_OFFSET + 1, // 1 for border
            left: hostRect.left - width - TUI_DROPDOWN_OFFSET,
            right: hostRect.right + TUI_DROPDOWN_OFFSET,
            bottom: hostRect.top - 2 * TUI_DROPDOWN_OFFSET - 1, // 1 for border
        } as const;
        const better = available.top > available.bottom ? `top` : `bottom`;
        const maxLeft = available.left > available.right ? position.left : position.right;
        const left = available[align] > width ? position[align] : maxLeft;

        if (
            (available[this.previous] > minHeight && direction) ||
            this.previous === better
        ) {
            return [position[this.previous], left];
        }

        this.previous = better;

        return [position[better], left];
    }
}

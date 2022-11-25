import {Directive, Inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    tuiAsPositionAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/abstract';
import {TuiPoint} from '@taiga-ui/core/types';

import {
    TUI_DROPDOWN_OFFSET,
    TUI_DROPDOWN_OPTIONS,
    TuiDropdownOptions,
} from './dropdown-options.directive';
import {TuiDropdownPositionDirective} from './dropdown-position.directive';

@Directive({
    selector: `[tuiDropdownSided]`,
    providers: [
        TuiDropdownPositionDirective,
        tuiAsPositionAccessor(TuiDropdownPositionSidedDirective),
    ],
})
export class TuiDropdownPositionSidedDirective implements TuiPositionAccessor {
    private previous = this.options.direction || `bottom`;

    @Input()
    tuiDropdownSided: boolean | string = ``;

    constructor(
        @Inject(TUI_DROPDOWN_OPTIONS) private readonly options: TuiDropdownOptions,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TuiRectAccessor) private readonly accessor: TuiRectAccessor,
        @Inject(TuiDropdownPositionDirective)
        private readonly vertical: TuiPositionAccessor,
    ) {}

    getPosition(rect: ClientRect): TuiPoint {
        if (this.tuiDropdownSided === false) {
            return this.vertical.getPosition(rect);
        }

        const {height, width} = rect;
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

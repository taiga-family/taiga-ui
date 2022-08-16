import {Directive, Inject} from '@angular/core';
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

@Directive({
    selector: `[tuiDropdown]:not([tuiDropdownCustomPosition]):not([tuiDropdownSided])`,
    providers: [tuiAsPositionAccessor(TuiDropdownPositionDirective)],
})
export class TuiDropdownPositionDirective implements TuiPositionAccessor {
    private previous = this.options.direction || `bottom`;

    constructor(
        @Inject(TUI_DROPDOWN_OPTIONS) private readonly options: TuiDropdownOptions,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TuiRectAccessor) private readonly accessor: TuiRectAccessor,
    ) {}

    getPosition({width, height}: ClientRect): TuiPoint {
        const hostRect = this.accessor.getClientRect();
        const {innerHeight, innerWidth} = this.windowRef;
        const {minHeight, align, direction} = this.options;
        const available = {
            top: hostRect.top - 2 * TUI_DROPDOWN_OFFSET,
            bottom: innerHeight - hostRect.bottom - 2 * TUI_DROPDOWN_OFFSET,
        } as const;
        const position = {
            top: hostRect.top - TUI_DROPDOWN_OFFSET - height,
            bottom: hostRect.bottom + TUI_DROPDOWN_OFFSET,
        } as const;
        const better = available.top > available.bottom ? `top` : `bottom`;
        const left =
            align === `right`
                ? Math.max(hostRect.right - width, TUI_DROPDOWN_OFFSET)
                : Math.min(hostRect.left, innerWidth - width - TUI_DROPDOWN_OFFSET);

        if (
            (available[this.previous] > minHeight && direction) ||
            available[this.previous] > height ||
            this.previous === better
        ) {
            return [position[this.previous], left];
        }

        this.previous = better;

        return [position[better], left];
    }
}

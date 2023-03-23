import {Directive, Inject, Input} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import type {TuiRectAccessor} from '@taiga-ui/core/abstract';
import {tuiAsPositionAccessor, TuiPositionAccessor} from '@taiga-ui/core/abstract';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import type {TuiPoint} from '@taiga-ui/core/types';

import type {TuiDropdownOptions} from './dropdown-options.directive';
import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';
import {TuiDropdownPositionDirective} from './dropdown-position.directive';

@Directive({
    selector: '[tuiDropdownSided]',
    providers: [
        TuiDropdownPositionDirective,
        tuiAsPositionAccessor(TuiDropdownPositionSidedDirective),
    ],
})
export class TuiDropdownPositionSidedDirective extends TuiPositionAccessor {
    private previous = this.options.direction || 'bottom';

    @Input()
    tuiDropdownSided: boolean | string = '';

    @Input()
    tuiDropdownSidedOffset = 4;

    readonly type = 'dropdown';

    constructor(
        @Inject(TUI_DROPDOWN_OPTIONS) private readonly options: TuiDropdownOptions,
        @Inject(TUI_VIEWPORT) private readonly viewport: TuiRectAccessor,
        @Inject(TuiDropdownPositionDirective)
        private readonly vertical: TuiDropdownPositionDirective,
    ) {
        super();
    }

    getPosition(rect: ClientRect): TuiPoint {
        if (this.tuiDropdownSided === false) {
            return this.vertical.getPosition(rect);
        }

        const {height, width} = rect;
        const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
        const viewport = this.viewport.getClientRect();
        const {align, direction, minHeight, offset} = this.options;
        const available = {
            top: hostRect.bottom - viewport.top,
            left: hostRect.left - offset - viewport.left,
            right: viewport.right - hostRect.right - offset,
            bottom: viewport.bottom - hostRect.top,
        } as const;
        const position = {
            top: hostRect.bottom - height + this.tuiDropdownSidedOffset + 1, // 1 for border
            left: hostRect.left - width - offset,
            right: hostRect.right + offset,
            bottom: hostRect.top - this.tuiDropdownSidedOffset - 1, // 1 for border
        } as const;
        const better = available.top > available.bottom ? 'top' : 'bottom';
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

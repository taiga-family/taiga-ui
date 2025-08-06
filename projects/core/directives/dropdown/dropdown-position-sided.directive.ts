import {Directive, inject, Input} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiAsPositionAccessor, TuiPositionAccessor} from '@taiga-ui/core/classes';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import type {TuiPoint} from '@taiga-ui/core/types';

import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';

@Directive({
    standalone: true,
    selector: '[tuiDropdownSided]',
    providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)],
})
export class TuiDropdownPositionSided extends TuiPositionAccessor {
    private readonly options = inject(TUI_DROPDOWN_OPTIONS);
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly vertical = inject(TuiDropdownPosition);
    private previous = this.options.direction || 'bottom';

    @Input()
    public tuiDropdownSided: boolean | string = '';

    @Input()
    public tuiDropdownSidedOffset = 4;

    public readonly type = 'dropdown';

    public getPosition(rect: DOMRect): TuiPoint {
        if (this.tuiDropdownSided === false) {
            return this.vertical.getPosition(rect);
        }

        const {height, width} = rect;
        const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
        const viewport = this.viewport.getClientRect();
        const {direction, offset} = this.options;
        const adjusted = this.vertical.getAlign(this.options.align);
        const align = adjusted === 'center' ? 'left' : adjusted;
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
            (available[this.previous] > height && direction) ||
            this.previous === better
        ) {
            this.vertical.emitDirection(this.previous);

            return [position[this.previous], left];
        }

        this.previous = better;
        this.vertical.emitDirection(better);

        return [position[better], left];
    }
}

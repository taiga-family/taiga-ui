import {Directive, Inject} from '@angular/core';
import {EMPTY_CLIENT_RECT, tuiPure} from '@taiga-ui/cdk';
import {
    tuiAsPositionAccessor,
    tuiFallbackRectAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/abstract';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {TuiPoint, TuiVerticalDirection} from '@taiga-ui/core/types';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_OPTIONS, TuiDropdownOptions} from './dropdown-options.directive';

@Directive({
    selector: '[tuiDropdown]:not([tuiDropdownCustomPosition]):not([tuiDropdownSided])',
    providers: [tuiAsPositionAccessor(TuiDropdownPositionDirective)],
})
export class TuiDropdownPositionDirective extends TuiPositionAccessor {
    private previous?: TuiVerticalDirection;

    readonly type = 'dropdown';

    constructor(
        @Inject(TUI_DROPDOWN_OPTIONS) private readonly options: TuiDropdownOptions,
        @Inject(TUI_VIEWPORT) private readonly viewport: TuiRectAccessor,
        @Inject(TuiRectAccessor) private readonly accessors: readonly TuiRectAccessor[],
        @Inject(TuiDropdownDirective) private readonly directive: TuiDropdownDirective,
    ) {
        super();
    }

    getPosition({height, width}: ClientRect): TuiPoint {
        const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
        const viewport = this.viewport.getClientRect();
        const {align, direction, minHeight, offset} = this.options;
        const previous = this.previous || direction || 'bottom';
        const right = Math.max(hostRect.right - width, offset);
        const available = {
            bottom: viewport.bottom - hostRect.bottom - 2 * offset,
            top: hostRect.top - 2 * offset - viewport.top,
        } as const;
        const position = {
            bottom: hostRect.bottom + offset,
            center:
                hostRect.left + hostRect.width / 2 + width / 2 < viewport.right - offset
                    ? hostRect.left + hostRect.width / 2 - width / 2
                    : right,
            left: hostRect.left + width < viewport.right - offset ? hostRect.left : right,
            right,
            top: hostRect.top - offset - height,
        } as const;
        const better = available.top > available.bottom ? 'top' : 'bottom';

        if (
            (available[previous] > minHeight && direction) ||
            available[previous] > height
        ) {
            return [position[previous], position[align]];
        }

        this.previous = better;

        return [position[better], position[align]];
    }

    @tuiPure
    get accessor(): TuiRectAccessor {
        return tuiFallbackRectAccessor('dropdown')(this.accessors, this.directive);
    }
}

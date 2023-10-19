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

    getPosition({width, height}: ClientRect): TuiPoint {
        if (!width && !height) {
            this.previous = undefined;
        }

        const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
        const viewportRect = this.viewport.getClientRect();
        const {minHeight, align, direction, offset} = this.options;
        const viewport = {
            top: viewportRect.top - offset,
            bottom: viewportRect.bottom + offset,
            right: viewportRect.right - offset,
            left: viewportRect.left + offset,
        } as const;
        const previous = this.previous || direction || 'bottom';
        const available = {
            top: hostRect.top - 2 * offset - viewport.top,
            bottom: viewport.bottom - hostRect.bottom - 2 * offset,
        } as const;
        const right = Math.max(hostRect.right - width, offset);
        const left = hostRect.left + width < viewport.right ? hostRect.left : right;
        const position = {
            top: hostRect.top - offset - height,
            bottom: hostRect.bottom + offset,
            right: Math.max(viewport.left, right),
            center:
                hostRect.left + hostRect.width / 2 + width / 2 < viewport.right
                    ? hostRect.left + hostRect.width / 2 - width / 2
                    : right,
            left: Math.max(viewport.left, left),
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

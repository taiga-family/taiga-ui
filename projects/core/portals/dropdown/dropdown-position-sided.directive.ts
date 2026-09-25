import {Directive, inject, input} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiAsPositionAccessor, TuiPositionAccessor} from '@taiga-ui/core/classes';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {type TuiPoint} from '@taiga-ui/core/types';

import {TUI_DROPDOWN_ANCHOR} from './dropdown.providers';
import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';

@Directive({
    selector: '[tuiDropdownSided]',
    providers: [tuiAsPositionAccessor(TuiDropdownPositionSided)],
})
export class TuiDropdownPositionSided extends TuiPositionAccessor {
    private readonly anchor = inject(TUI_DROPDOWN_ANCHOR, {optional: true});
    private readonly options = inject(TUI_DROPDOWN_OPTIONS);
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly vertical = inject(TuiDropdownPosition, {optional: true});
    private previous = this.options.direction || 'bottom';

    public readonly tuiDropdownSided = input<boolean | string>('');
    public readonly tuiDropdownSidedOffset = input(4);
    public readonly type = 'dropdown';

    public position(element: HTMLElement): void {
        if (this.tuiDropdownSided() === false) {
            this.vertical?.position(element);

            return;
        }

        const {direction, align, offset, minHeight, maxHeight} = this.options;
        const horizontal = align === 'center' ? 'end' : align;

        Object.assign(element.style, {
            position: 'fixed',
            visibility: 'visible',
            positionAnchor: this.anchor?.nativeElement.dataset.tuiAnchor,
            positionArea: `x-${horizontal} span-${direction || 'bottom'}`,
            minBlockSize: `calc-size(fit-content, min(size, ${minHeight}px))`,
            maxBlockSize: `min(calc-size(fit-content, size), ${maxHeight}px)`,
            margin: `${-offset}px ${offset}px`,
        });
    }

    public getPosition(rect: DOMRect): TuiPoint {
        if (this.tuiDropdownSided() === false && this.vertical) {
            return this.vertical.getPosition(rect);
        }

        const {height, width} = rect;
        const hostRect = this.vertical?.accessor.getClientRect() ?? EMPTY_CLIENT_RECT;
        const viewport = this.viewport.getClientRect();
        const {direction, offset} = this.options;
        const adjusted = this.vertical?.getAlign(this.options.align) || 'center';
        const align = adjusted === 'center' ? 'left' : adjusted;

        const available = {
            top: hostRect.bottom - viewport.top,
            left: hostRect.left - offset - viewport.left,
            right: viewport.right - hostRect.right - offset,
            bottom: viewport.bottom - hostRect.top,
        } as const;

        const position = {
            top: hostRect.bottom - height + this.tuiDropdownSidedOffset() + 1, // 1 for border
            left: hostRect.left - width - offset,
            right: hostRect.right + offset,
            bottom: hostRect.top - this.tuiDropdownSidedOffset() - 1, // 1 for border
        } as const;

        const better = available.top > available.bottom ? 'top' : 'bottom';
        const maxLeft = available.left > available.right ? position.left : position.right;
        const left = available[align] > width ? position[align] : maxLeft;

        if (
            (available[this.previous] > height && direction) ||
            this.previous === better
        ) {
            this.vertical?.direction.next(this.previous);

            return [left, position[this.previous]];
        }

        this.previous = better;
        this.vertical?.direction.next(better);

        return [left, position[better]];
    }
}

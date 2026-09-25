import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiAsPositionAccessor,
    tuiInjectAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/classes';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {type TuiPoint, type TuiVerticalDirection} from '@taiga-ui/core/types';
import {distinctUntilChanged, Subject} from 'rxjs';

import {TUI_DROPDOWN_ANCHOR} from './dropdown.providers';
import {TUI_DROPDOWN_OPTIONS, type TuiDropdownAlign} from './dropdown-options.directive';

@Directive({providers: [tuiAsPositionAccessor(TuiDropdownPosition)]})
export class TuiDropdownPosition extends TuiPositionAccessor {
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_DROPDOWN_OPTIONS);
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly anchor = inject(TUI_DROPDOWN_ANCHOR);
    private previous?: TuiVerticalDirection;

    public readonly direction = new Subject<TuiVerticalDirection>();
    public readonly type = 'dropdown';
    public readonly accessor = tuiInjectAccessor(TuiRectAccessor, 'dropdown');
    public readonly tuiDropdownDirectionChange = outputFromObservable(
        this.direction.pipe(distinctUntilChanged()),
    );

    public position(element: HTMLElement): void {
        const {direction, align, offset, limitWidth, minHeight, maxHeight} = this.options;
        const rect = this.anchor.nativeElement.getBoundingClientRect();
        const viewport = this.viewport.getClientRect();
        const horizontal = align === 'center' ? '' : `span-x-${invert(align)}`;
        const height = Math.min(element.clientHeight, maxHeight) + offset * 2;
        const vertical = direction || 'bottom';
        const top = rect.top - viewport.top;
        const bottom = viewport.bottom - rect.bottom;
        const available = vertical === 'top' ? top : bottom;
        const max = Math.max(top, bottom);

        Object.assign(element.style, {
            position: 'fixed',
            visibility: 'visible',
            positionAnchor: this.anchor.nativeElement.dataset.tuiAnchor,
            positionArea: `${available < height && max !== available ? flip(vertical) : vertical} ${horizontal}`,
            marginBlock: `${offset}px`,
            minBlockSize: `calc-size(fit-content, min(size, ${minHeight}px))`,
            maxBlockSize: `calc-size(fit-content, min(size, ${maxHeight}px))`,
            minInlineSize: limitWidth === 'min' ? 'anchor-size(inline)' : '',
            inlineSize: limitWidth === 'fixed' ? 'anchor-size(inline)' : '',
            blockSize: `calc-size(fit-content, calc(100% - ${2 * offset}px))`,
        });
    }

    public getPosition({width, height}: DOMRect): TuiPoint {
        if (!width && !height) {
            this.previous = undefined;
        }

        const hostRect = this.accessor.getClientRect();
        const viewportRect = this.viewport.getClientRect();
        const {minHeight, direction, offset, limitWidth} = this.options;
        const align = this.getAlign(this.options.align);
        const previous = this.previous || direction || 'bottom';
        const viewport = {
            top: viewportRect.top - offset,
            bottom: viewportRect.bottom + offset,
            right: viewportRect.right - offset,
            left: viewportRect.left + offset,
        } as const;

        const available = {
            top: hostRect.top - 2 * offset - viewport.top,
            bottom: viewport.bottom - hostRect.bottom - 2 * offset,
        } as const;

        const rectWidth = limitWidth === 'fixed' ? hostRect.width : width;
        const right = Math.max(hostRect.right - rectWidth, offset);
        const left = hostRect.left + width < viewport.right ? hostRect.left : right;
        const better = available.top > available.bottom ? 'top' : 'bottom';
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

        if (
            (available[previous] > minHeight && direction) ||
            available[previous] > height
        ) {
            this.direction.next(previous);

            return [position[align], position[previous]];
        }

        this.previous = better;
        this.direction.next(better);

        return [position[align], position[better]];
    }

    public getAlign(align: TuiDropdownAlign): 'center' | 'left' | 'right' {
        const rtl = this.el.matches('[dir="rtl"] :scope');

        if (rtl && align === 'start') {
            return 'right';
        }

        if (rtl && align === 'end') {
            return 'left';
        }

        if (align === 'center') {
            return 'center';
        }

        return align === 'end' ? 'right' : 'left';
    }
}

// TODO: Review in v6 to possible sync alignment with native anchors
function invert(align: TuiDropdownAlign): TuiDropdownAlign {
    return align === 'start' ? 'end' : 'start';
}

function flip(direction: TuiVerticalDirection): TuiVerticalDirection {
    return direction === 'top' ? 'bottom' : 'top';
}

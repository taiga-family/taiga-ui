import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiFallbackAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/classes';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {type TuiPoint, type TuiVerticalDirection} from '@taiga-ui/core/types';
import {distinctUntilChanged, Subject} from 'rxjs';

import {TUI_DROPDOWN_OPTIONS, type TuiDropdownAlign} from './dropdown-options.directive';

@Directive()
export class TuiDropdownPosition extends TuiPositionAccessor {
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_DROPDOWN_OPTIONS);
    private readonly viewport = inject(TUI_VIEWPORT);
    private previous?: TuiVerticalDirection;

    public readonly direction = new Subject<TuiVerticalDirection>();
    public readonly type = 'dropdown';
    public readonly accessor = tuiFallbackAccessor<TuiRectAccessor>('dropdown')(
        inject<any>(TuiRectAccessor, {optional: true}),
        {getClientRect: () => this.el.getBoundingClientRect()},
    );

    public readonly tuiDropdownDirectionChange = outputFromObservable(
        this.direction.pipe(distinctUntilChanged()),
    );

    public getPosition({width, height}: DOMRect): TuiPoint {
        if (!width && !height) {
            this.previous = undefined;
        }

        const hostRect = this.accessor.getClientRect();
        const viewportRect = this.viewport.getClientRect();
        const {minHeight, direction, offset, limitWidth} = this.options;
        const align = this.getAlign(this.options.align);
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
        const rectWidth = limitWidth === 'fixed' ? hostRect.width : width;
        const right = Math.max(hostRect.right - rectWidth, offset);
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
        const better: TuiVerticalDirection =
            available.top > available.bottom ? 'top' : 'bottom';

        if (
            (available[previous] > minHeight && direction) ||
            available[previous] > height
        ) {
            this.direction.next(previous);

            return [position[previous], position[align]];
        }

        this.previous = better;
        this.direction.next(better);

        return [position[better], position[align]];
    }

    public getAlign(align: TuiDropdownAlign): TuiDropdownAlign {
        const rtl = this.el.matches('[dir="rtl"] :scope');

        if (rtl && align === 'left') {
            return 'right';
        }

        return rtl && align === 'right' ? 'left' : align;
    }
}

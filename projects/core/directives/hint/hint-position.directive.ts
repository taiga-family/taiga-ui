import {Directive, EventEmitter, inject, Input, Output} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiFallbackAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/classes';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import type {TuiPoint} from '@taiga-ui/core/types';

import {TuiHintDirective} from './hint.directive';
import type {TuiHintDirection, TuiHintOptions} from './hint-options.directive';
import {TUI_HINT_DIRECTIONS, TUI_HINT_OPTIONS} from './hint-options.directive';

const GAP = 8;
const ARROW_OFFSET = 24;
const TOP = 0;
const LEFT = 1;

@Directive({
    standalone: true,
})
export class TuiHintPosition extends TuiPositionAccessor {
    private readonly offset = inject(TUI_IS_MOBILE) ? 16 : 8;
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly accessor = tuiFallbackAccessor<TuiRectAccessor>('hint')(
        inject<any>(TuiRectAccessor),
        inject(TuiHintDirective),
    );

    private readonly points: Record<TuiHintDirection, [number, number]> =
        TUI_HINT_DIRECTIONS.reduce(
            (acc, direction) => ({...acc, [direction]: [0, 0]}),
            {} as Record<TuiHintDirection, [number, number]>,
        );

    @Input('tuiHintDirection')
    public direction: TuiHintOptions['direction'] = inject(TUI_HINT_OPTIONS).direction;

    @Output('tuiHintDirectionChange')
    public readonly directionChange = new EventEmitter<TuiHintDirection>();

    public readonly type = 'hint';

    @tuiPure
    public emitDirection(direction: TuiHintDirection): void {
        this.directionChange.emit(direction);
    }

    public getPosition(rect: DOMRect, el?: HTMLElement): TuiPoint {
        const width = el?.clientWidth ?? rect.width;
        const height = el?.clientHeight ?? rect.height;
        const hostRect = this.accessor.getClientRect() ?? EMPTY_CLIENT_RECT;
        const leftCenter = hostRect.left + hostRect.width / 2;
        const topCenter = hostRect.top + hostRect.height / 2;

        this.points['top-left'][TOP] = hostRect.top - height - this.offset;
        this.points['top-left'][LEFT] = leftCenter - width + ARROW_OFFSET;
        this.points.top[TOP] = this.points['top-left'][TOP];
        this.points.top[LEFT] = leftCenter - width / 2;
        this.points['top-right'][TOP] = this.points['top-left'][TOP];
        this.points['top-right'][LEFT] = leftCenter - ARROW_OFFSET;

        this.points['bottom-left'][TOP] = hostRect.bottom + this.offset;
        this.points['bottom-left'][LEFT] = this.points['top-left'][LEFT];
        this.points.bottom[TOP] = this.points['bottom-left'][TOP];
        this.points.bottom[LEFT] = this.points.top[LEFT];
        this.points['bottom-right'][TOP] = this.points['bottom-left'][TOP];
        this.points['bottom-right'][LEFT] = this.points['top-right'][LEFT];

        this.points['left-top'][TOP] = topCenter - height + ARROW_OFFSET;
        this.points['left-top'][LEFT] = hostRect.left - width - this.offset;
        this.points.left[TOP] = topCenter - height / 2;
        this.points.left[LEFT] = this.points['left-top'][LEFT];
        this.points['left-bottom'][TOP] = topCenter - ARROW_OFFSET;
        this.points['left-bottom'][LEFT] = this.points['left-top'][LEFT];

        this.points['right-top'][TOP] = this.points['left-top'][TOP];
        this.points['right-top'][LEFT] = hostRect.right + this.offset;
        this.points.right[TOP] = this.points.left[TOP];
        this.points.right[LEFT] = this.points['right-top'][LEFT];
        this.points['right-bottom'][TOP] = this.points['left-bottom'][TOP];
        this.points['right-bottom'][LEFT] = this.points['right-top'][LEFT];

        const priorityDirections = Array.isArray(this.direction)
            ? this.direction
            : [this.direction];
        const sortedDirections = priorityDirections.concat(TUI_HINT_DIRECTIONS);

        const direction =
            sortedDirections.find((direction) =>
                this.checkPosition(this.points[direction], width, height),
            ) || this.fallback;

        this.emitDirection(direction);

        return this.points[direction];
    }

    private get fallback(): TuiHintDirection {
        return this.points.top[TOP] >
            this.viewport.getClientRect().bottom - this.points.bottom[TOP]
            ? 'top'
            : 'bottom';
    }

    private checkPosition([top, left]: TuiPoint, width: number, height: number): boolean {
        const viewport = this.viewport.getClientRect();

        return (
            top > viewport.top + GAP &&
            left > viewport.left + GAP &&
            top + height < viewport.bottom - GAP &&
            left + width < viewport.right - GAP
        );
    }
}

import {Directive, Inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {
    tuiAsPositionAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/abstract';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core/constants';
import {TuiHintDirection, TuiPoint} from '@taiga-ui/core/types';

import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options.directive';

const OFFSET = 8;
const ARROW_OFFSET = 22;
const TOP = 0;
const LEFT = 1;

@Directive({
    selector: `[tuiHint]:not([tuiHintCustomPosition])`,
    providers: [tuiAsPositionAccessor(TuiHintPositionDirective)],
})
export class TuiHintPositionDirective implements TuiPositionAccessor {
    private readonly points: Record<TuiHintDirection, [number, number]> =
        TUI_HINT_DIRECTIONS.reduce(
            (acc, direction) => ({...acc, [direction]: [0, 0]}),
            {} as any,
        );

    @Input(`tuiHintDirection`)
    @tuiDefaultProp()
    direction: TuiHintOptions['direction'] = this.options.direction;

    constructor(
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TuiRectAccessor) private readonly accessor: TuiRectAccessor,
    ) {}

    getPosition({width, height}: ClientRect): TuiPoint {
        const hostRect = this.accessor.getClientRect();
        const leftCenter = hostRect.left + hostRect.width / 2;
        const topCenter = hostRect.top + hostRect.height / 2;

        this.points[`top-left`][TOP] = hostRect.top - height - OFFSET;
        this.points[`top-left`][LEFT] = leftCenter - width + ARROW_OFFSET;
        this.points.top[TOP] = this.points[`top-left`][TOP];
        this.points.top[LEFT] = leftCenter - width / 2;
        this.points[`top-right`][TOP] = this.points[`top-left`][TOP];
        this.points[`top-right`][LEFT] = leftCenter - ARROW_OFFSET;

        this.points[`bottom-left`][TOP] = hostRect.bottom + OFFSET;
        this.points[`bottom-left`][LEFT] = this.points[`top-left`][LEFT];
        this.points.bottom[TOP] = this.points[`bottom-left`][TOP];
        this.points.bottom[LEFT] = this.points.top[LEFT];
        this.points[`bottom-right`][TOP] = this.points[`bottom-left`][TOP];
        this.points[`bottom-right`][LEFT] = this.points[`top-right`][LEFT];

        this.points[`left-top`][TOP] = topCenter - height + ARROW_OFFSET;
        this.points[`left-top`][LEFT] = hostRect.left - width - OFFSET;
        this.points.left[TOP] = topCenter - height / 2;
        this.points.left[LEFT] = this.points[`left-top`][LEFT];
        this.points[`left-bottom`][TOP] = topCenter - ARROW_OFFSET;
        this.points[`left-bottom`][LEFT] = this.points[`left-top`][LEFT];

        this.points[`right-top`][TOP] = this.points[`left-top`][TOP];
        this.points[`right-top`][LEFT] = hostRect.right + OFFSET;
        this.points.right[TOP] = this.points.left[TOP];
        this.points.right[LEFT] = this.points[`right-top`][LEFT];
        this.points[`right-bottom`][TOP] = this.points[`left-bottom`][TOP];
        this.points[`right-bottom`][LEFT] = this.points[`right-top`][LEFT];

        if (this.checkPosition(this.points[this.direction], width, height)) {
            return this.points[this.direction];
        }

        const direction = TUI_HINT_DIRECTIONS.find(direction =>
            this.checkPosition(this.points[direction], width, height),
        );

        return this.points[direction || this.fallback];
    }

    private get fallback(): TuiHintDirection {
        return this.points.top[TOP] > this.windowRef.innerHeight - this.points.bottom[TOP]
            ? `top`
            : `bottom`;
    }

    private checkPosition([top, left]: TuiPoint, width: number, height: number): boolean {
        const {innerHeight, innerWidth} = this.windowRef;

        return (
            top > OFFSET &&
            left > OFFSET &&
            top + height < innerHeight - OFFSET &&
            left + width < innerWidth - OFFSET
        );
    }
}

import {Directive, inject, input} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiFallbackAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/classes';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {type TuiPoint} from '@taiga-ui/core/types';
import {distinctUntilChanged, Subject} from 'rxjs';

import {
    TUI_HINT_DIRECTIONS,
    TUI_HINT_OPTIONS,
    type TuiHintDirection,
} from './hint-options.directive';

const GAP = 8;
const ARROW_OFFSET = 24;
const TOP = 1;
const LEFT = 0;

@Directive()
export class TuiHintPosition extends TuiPositionAccessor {
    private readonly el = tuiInjectElement();
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly directionChange = new Subject<TuiHintDirection>();
    private readonly accessor = tuiFallbackAccessor<TuiRectAccessor>('hint')(
        inject<any>(TuiRectAccessor, {optional: true}),
        {getClientRect: () => this.el.getBoundingClientRect()},
    );

    private readonly points: Record<TuiHintDirection, [number, number]> =
        TUI_HINT_DIRECTIONS.reduce(
            (acc, direction) => ({...acc, [direction]: [0, 0]}),
            {} as Record<TuiHintDirection, [number, number]>,
        );

    public readonly direction = input(inject(TUI_HINT_OPTIONS).direction, {
        alias: 'tuiHintDirection',
    });

    public readonly offset = input(inject(TUI_IS_MOBILE) ? 16 : 8, {
        alias: 'tuiHintOffset',
    });

    public readonly tuiHintDirectionChange = outputFromObservable(
        this.directionChange.pipe(distinctUntilChanged()),
    );

    public readonly type = 'hint';

    public getPosition({width, height}: DOMRect): TuiPoint {
        const direction = this.direction();
        const hostRect = this.accessor.getClientRect();
        const leftCenter = hostRect.left + hostRect.width / 2;
        const topCenter = hostRect.top + hostRect.height / 2;
        const rtl = this.el.matches('[dir="rtl"] :scope');

        this.points['top-start'][TOP] = hostRect.top - height - this.offset();
        this.points['top-start'][LEFT] = leftCenter - width + ARROW_OFFSET;
        this.points.top[TOP] = this.points['top-start'][TOP];
        this.points.top[LEFT] = leftCenter - width / 2;
        this.points['top-end'][TOP] = this.points['top-start'][TOP];
        this.points['top-end'][LEFT] = leftCenter - ARROW_OFFSET;

        this.points['bottom-start'][TOP] = hostRect.bottom + this.offset();
        this.points['bottom-start'][LEFT] = this.points['top-start'][LEFT];
        this.points.bottom[TOP] = this.points['bottom-start'][TOP];
        this.points.bottom[LEFT] = this.points.top[LEFT];
        this.points['bottom-end'][TOP] = this.points['bottom-start'][TOP];
        this.points['bottom-end'][LEFT] = this.points['top-end'][LEFT];

        this.points['start-top'][TOP] = topCenter - height + ARROW_OFFSET;
        this.points['start-top'][LEFT] = hostRect.left - width - this.offset();
        this.points.start[TOP] = topCenter - height / 2;
        this.points.start[LEFT] = this.points['start-top'][LEFT];
        this.points['start-bottom'][TOP] = topCenter - ARROW_OFFSET;
        this.points['start-bottom'][LEFT] = this.points['start-top'][LEFT];

        this.points['end-top'][TOP] = this.points['start-top'][TOP];
        this.points['end-top'][LEFT] = hostRect.right + this.offset();
        this.points.end[TOP] = this.points.start[TOP];
        this.points.end[LEFT] = this.points['end-top'][LEFT];
        this.points['end-bottom'][TOP] = this.points['start-bottom'][TOP];
        this.points['end-bottom'][LEFT] = this.points['end-top'][LEFT];

        const array = Array.isArray(direction) ? direction : [direction];
        const priority = array.map((direction) => adjust(direction, rtl));
        const updated =
            priority
                .concat(TUI_HINT_DIRECTIONS)
                .find((dir) => this.checkPosition(this.points[dir], width, height)) ||
            this.fallback;

        this.directionChange.next(adjust(updated, rtl));

        return this.points[updated];
    }

    private get fallback(): TuiHintDirection {
        return this.points.top[TOP] >
            this.viewport.getClientRect().bottom - this.points.bottom[TOP]
            ? 'top'
            : 'bottom';
    }

    private checkPosition([left, top]: TuiPoint, width: number, height: number): boolean {
        const viewport = this.viewport.getClientRect();

        return (
            top > viewport.top + GAP &&
            left > viewport.left + GAP &&
            top + height < viewport.bottom - GAP &&
            left + width < viewport.right - GAP
        );
    }
}

function adjust(direction: TuiHintDirection, rtl: boolean): TuiHintDirection {
    if (rtl && direction.includes('left')) {
        return direction.replace('left', 'right') as TuiHintDirection;
    }

    if (rtl && direction.includes('right')) {
        return direction.replace('right', 'left') as TuiHintDirection;
    }

    return direction;
}

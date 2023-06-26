import {Directive, Inject, Input} from '@angular/core';
import {EMPTY_CLIENT_RECT, tuiPure} from '@taiga-ui/cdk';
import {
    tuiAsPositionAccessor,
    tuiFallbackRectAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core/abstract';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core/constants';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {TuiHintDirection, TuiPoint} from '@taiga-ui/core/types';

import {TuiHintDirective} from './hint.directive';
import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options.directive';

const OFFSET = 8;
const ARROW_OFFSET = 22;
const TOP = 0;
const LEFT = 1;

@Directive({
    selector: '[tuiHint]:not([tuiHintCustomPosition])',
    providers: [tuiAsPositionAccessor(TuiHintPositionDirective)],
})
export class TuiHintPositionDirective extends TuiPositionAccessor {
    private readonly points: Record<TuiHintDirection, [number, number]> =
        TUI_HINT_DIRECTIONS.reduce(
            (acc, direction) => ({...acc, [direction]: [0, 0]}),
            {} as any,
        );

    @Input('tuiHintDirection')
    direction: TuiHintOptions['direction'] = this.options.direction;

    readonly type = 'hint';

    constructor(
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
        @Inject(TUI_VIEWPORT) private readonly viewport: TuiRectAccessor,
        @Inject(TuiHintDirective) private readonly directive: TuiRectAccessor,
        @Inject(TuiRectAccessor) private readonly accessors: readonly TuiRectAccessor[],
    ) {
        super();
    }

    // eslint-disable-next-line max-statements
    getPosition({width, height}: ClientRect): TuiPoint {
        const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
        const leftCenter = hostRect.left + hostRect.width / 2;
        const topCenter = hostRect.top + hostRect.height / 2;

        this.points['top-left'][TOP] = hostRect.top - height - OFFSET;
        this.points['top-left'][LEFT] = leftCenter - width + ARROW_OFFSET;
        this.points.top[TOP] = this.points['top-left'][TOP];
        this.points.top[LEFT] = leftCenter - width / 2;
        this.points['top-right'][TOP] = this.points['top-left'][TOP];
        this.points['top-right'][LEFT] = leftCenter - ARROW_OFFSET;

        this.points['bottom-left'][TOP] = hostRect.bottom + OFFSET;
        this.points['bottom-left'][LEFT] = this.points['top-left'][LEFT];
        this.points.bottom[TOP] = this.points['bottom-left'][TOP];
        this.points.bottom[LEFT] = this.points.top[LEFT];
        this.points['bottom-right'][TOP] = this.points['bottom-left'][TOP];
        this.points['bottom-right'][LEFT] = this.points['top-right'][LEFT];

        this.points['left-top'][TOP] = topCenter - height + ARROW_OFFSET;
        this.points['left-top'][LEFT] = hostRect.left - width - OFFSET;
        this.points.left[TOP] = topCenter - height / 2;
        this.points.left[LEFT] = this.points['left-top'][LEFT];
        this.points['left-bottom'][TOP] = topCenter - ARROW_OFFSET;
        this.points['left-bottom'][LEFT] = this.points['left-top'][LEFT];

        this.points['right-top'][TOP] = this.points['left-top'][TOP];
        this.points['right-top'][LEFT] = hostRect.right + OFFSET;
        this.points.right[TOP] = this.points.left[TOP];
        this.points.right[LEFT] = this.points['right-top'][LEFT];
        this.points['right-bottom'][TOP] = this.points['left-bottom'][TOP];
        this.points['right-bottom'][LEFT] = this.points['right-top'][LEFT];

        if (this.checkPosition(this.points[this.direction], width, height)) {
            return this.points[this.direction];
        }

        const direction = TUI_HINT_DIRECTIONS.find(direction =>
            this.checkPosition(this.points[direction], width, height),
        );

        return this.points[direction || this.fallback];
    }

    @tuiPure
    private get accessor(): TuiRectAccessor | undefined {
        return tuiFallbackRectAccessor('hint')(this.accessors, this.directive);
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
            top > OFFSET &&
            left > OFFSET &&
            top + height < viewport.bottom - OFFSET &&
            left + width < viewport.right - OFFSET
        );
    }
}

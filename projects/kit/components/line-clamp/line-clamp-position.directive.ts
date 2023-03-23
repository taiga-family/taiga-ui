import {Directive, Inject} from '@angular/core';
import type {TuiPoint, TuiRectAccessor} from '@taiga-ui/core';
import {
    tuiAsPositionAccessor,
    TuiHintDirective,
    TuiPositionAccessor,
} from '@taiga-ui/core';

@Directive({
    selector: '[tuiHintCustomPosition]',
    providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)],
})
export class TuiLineClampPositionDirective extends TuiPositionAccessor {
    readonly type = 'hint';

    constructor(@Inject(TuiHintDirective) private readonly accessor: TuiRectAccessor) {
        super();
    }

    getPosition(): TuiPoint {
        const {top, left} = this.accessor.getClientRect();

        return [top, left];
    }
}

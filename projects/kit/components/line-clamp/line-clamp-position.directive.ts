import {Directive, Inject} from '@angular/core';
import type {TuiPoint, TuiPositionAccessor} from '@taiga-ui/core';
import {tuiAsPositionAccessor, TuiRectAccessor} from '@taiga-ui/core';

@Directive({
    selector: `[tuiHintCustomPosition]`,
    providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)],
})
export class TuiLineClampPositionDirective implements TuiPositionAccessor {
    constructor(@Inject(TuiRectAccessor) private readonly accessor: TuiRectAccessor) {}

    getPosition(): TuiPoint {
        const {top, left} = this.accessor.getClientRect();

        return [top, left];
    }
}

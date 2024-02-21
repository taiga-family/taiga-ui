import {Directive, inject} from '@angular/core';
import {
    tuiAsPositionAccessor,
    TuiHintDirective,
    TuiPoint,
    TuiPositionAccessor,
    TuiRectAccessor,
} from '@taiga-ui/core';

@Directive({
    selector: '[tuiLineClampPosition]',
    providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)],
})
export class TuiLineClampPositionDirective extends TuiPositionAccessor {
    private readonly accessor = inject<TuiRectAccessor>(TuiHintDirective);
    readonly type = 'hint';

    getPosition(): TuiPoint {
        const {top, left} = this.accessor.getClientRect();

        return [top, left];
    }
}

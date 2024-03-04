import {Directive, inject} from '@angular/core';
import {
    tuiAsPositionAccessor,
    TuiHintDirective,
    type TuiPoint,
    TuiPositionAccessor,
    type TuiRectAccessor,
} from '@taiga-ui/core';

@Directive({
    selector: '[tuiLineClampPosition]',
    providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)],
})
export class TuiLineClampPositionDirective extends TuiPositionAccessor {
    private readonly accessor = inject<TuiRectAccessor>(TuiHintDirective);
    public readonly type = 'hint';

    public getPosition(): TuiPoint {
        const {top, left} = this.accessor.getClientRect();

        return [top, left];
    }
}

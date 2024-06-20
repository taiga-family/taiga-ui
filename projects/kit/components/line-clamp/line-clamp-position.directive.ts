import {Directive, inject} from '@angular/core';
import type {TuiRectAccessor} from '@taiga-ui/core/classes';
import {tuiAsPositionAccessor, TuiPositionAccessor} from '@taiga-ui/core/classes';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import type {TuiPoint} from '@taiga-ui/core/types';

@Directive({
    standalone: true,
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

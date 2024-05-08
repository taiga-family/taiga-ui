import {Directive} from '@angular/core';
import {tuiNativeElement} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {tuiAsPositionAccessor, TuiPositionAccessor} from '@taiga-ui/core';

@Directive({
    selector: '[topRight]',
    providers: [tuiAsPositionAccessor(TopRightDirective)],
})
export class TopRightDirective extends TuiPositionAccessor {
    private readonly el = tuiNativeElement();

    public readonly type = 'dropdown';

    public getPosition({height}: DOMRect): TuiPoint {
        const {right, top} = this.el.getBoundingClientRect();

        return [top - height, right];
    }
}

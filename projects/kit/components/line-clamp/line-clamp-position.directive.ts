import {Directive, inject} from '@angular/core';
import {
    tuiAsPositionAccessor,
    TuiPositionAccessor,
    type TuiRectAccessor,
} from '@taiga-ui/core/classes';
import {TUI_HINT_ANCHOR, TuiHintDirective} from '@taiga-ui/core/portals/hint';
import {type TuiPoint} from '@taiga-ui/core/types';

@Directive({
    selector: '[tuiLineClampPosition]',
    providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)],
})
export class TuiLineClampPositionDirective extends TuiPositionAccessor {
    private readonly anchor = inject(TUI_HINT_ANCHOR);
    private readonly accessor = inject<TuiRectAccessor>(TuiHintDirective);

    public readonly type = 'hint';

    public override position({style}: HTMLElement): void {
        Object.assign(style, {
            position: 'fixed',
            visibility: 'visible',
            positionAnchor: this.anchor.nativeElement.dataset.tuiAnchor,
        });
    }

    public getPosition(): TuiPoint {
        const {top, left} = this.accessor.getClientRect();

        return [left, top];
    }
}

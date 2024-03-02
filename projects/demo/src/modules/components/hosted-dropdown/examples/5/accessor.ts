import {Directive, ElementRef, inject} from '@angular/core';
import {tuiAsPositionAccessor, type TuiPoint, TuiPositionAccessor} from '@taiga-ui/core';

@Directive({
    selector: '[topRight]',
    providers: [tuiAsPositionAccessor(TopRightDirective)],
})
export class TopRightDirective extends TuiPositionAccessor {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    public readonly type = 'dropdown';

    public getPosition({height}: ClientRect): TuiPoint {
        const {right, top} = this.el.getBoundingClientRect();

        return [top - height, right];
    }
}

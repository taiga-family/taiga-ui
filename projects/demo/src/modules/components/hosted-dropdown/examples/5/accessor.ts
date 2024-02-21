import {Directive, ElementRef, inject} from '@angular/core';
import {tuiAsPositionAccessor, TuiPoint, TuiPositionAccessor} from '@taiga-ui/core';

@Directive({
    selector: '[topRight]',
    providers: [tuiAsPositionAccessor(TopRightDirective)],
})
export class TopRightDirective extends TuiPositionAccessor {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    readonly type = 'dropdown';

    getPosition({height}: ClientRect): TuiPoint {
        const {right, top} = this.el.getBoundingClientRect();

        return [top - height, right];
    }
}

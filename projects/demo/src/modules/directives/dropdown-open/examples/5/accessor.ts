import {Directive, ElementRef, Inject} from '@angular/core';
import {tuiAsPositionAccessor, TuiPoint, TuiPositionAccessor} from '@taiga-ui/core';

@Directive({
    selector: `[topRight]`,
    providers: [tuiAsPositionAccessor(TopRightDirective)],
})
export class TopRightDirective extends TuiPositionAccessor {
    readonly type = `dropdown`;

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {
        super();
    }

    getPosition({height}: ClientRect): TuiPoint {
        const {right, top} = this.el.nativeElement.getBoundingClientRect();

        return [top - height, right];
    }
}

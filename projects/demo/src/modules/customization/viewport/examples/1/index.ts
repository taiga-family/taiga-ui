import {Component, ElementRef, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsViewport, TuiRectAccessor} from '@taiga-ui/core';

@Component({
    selector: 'tui-viewport-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAsViewport(TuiViewportExample1)],
})
export class TuiViewportExample1 extends TuiRectAccessor {
    readonly type = 'viewport';

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {
        super();
    }

    getClientRect(): ClientRect {
        return this.el.nativeElement.getBoundingClientRect();
    }
}

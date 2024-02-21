import {Component, ElementRef, inject} from '@angular/core';
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
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    readonly type = 'viewport';

    getClientRect(): ClientRect {
        return this.el.getBoundingClientRect();
    }
}

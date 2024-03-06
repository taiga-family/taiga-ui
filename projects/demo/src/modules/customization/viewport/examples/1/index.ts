import {Component, ElementRef, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiAsViewport,
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
    TuiRectAccessor,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-viewport-example-1',
    imports: [TuiDropdownDirective, TuiDropdownHoverDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAsViewport(TuiViewportExample1)],
})
export class TuiViewportExample1 extends TuiRectAccessor {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    public readonly type = 'viewport';

    public getClientRect(): ClientRect {
        return this.el.getBoundingClientRect();
    }
}

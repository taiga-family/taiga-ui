import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
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
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): ClientRect {
        return this.el.getBoundingClientRect();
    }
}

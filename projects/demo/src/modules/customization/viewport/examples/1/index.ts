import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {tuiAsViewport, TuiDropdown, TuiRectAccessor} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-viewport-example-1',
    imports: [TuiDropdown],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAsViewport(Example)],
})
export class Example extends TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}

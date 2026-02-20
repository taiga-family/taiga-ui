import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {tuiAsViewport, TuiDropdown, TuiRectAccessor} from '@taiga-ui/core';

@Component({
    imports: [TuiDropdown],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiAsViewport(Example)],
})
export default class Example extends TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}
`;export{o as default};

import"./chunk-HU6DUUP4.js";var i=`import {Component, Directive} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {
    tuiAsPositionAccessor,
    TuiButton,
    TuiDropdown,
    TuiDropdownOpen,
    type TuiPoint,
    TuiPositionAccessor,
} from '@taiga-ui/core';

@Directive({
    selector: '[topRight]',
    providers: [tuiAsPositionAccessor(TopRightDirective)],
})
class TopRightDirective extends TuiPositionAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'dropdown';

    public getPosition({height}: DOMRect): TuiPoint {
        const {right, top} = this.el.getBoundingClientRect();

        return [right, top - height];
    }
}

@Component({
    imports: [TopRightDirective, TuiButton, TuiDropdown, TuiDropdownOpen],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
`;export{i as default};

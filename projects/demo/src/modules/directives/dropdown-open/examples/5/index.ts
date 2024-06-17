import {Component, Directive} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {
    tuiAsPositionAccessor,
    TuiButtonDirective,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    type TuiPoint,
    TuiPositionAccessor,
} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: '[topRight]',
    providers: [tuiAsPositionAccessor(TopRightDirective)],
})
class TopRightDirective extends TuiPositionAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'dropdown';

    public getPosition({height}: DOMRect): TuiPoint {
        const {right, top} = this.el.getBoundingClientRect();

        return [top - height, right];
    }
}

@Component({
    standalone: true,
    imports: [
        TopRightDirective,
        TuiDropdownOpenDirective,
        TuiButtonDirective,
        TuiDropdownDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAppearance,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiDropdownDirective, TuiDropdownOpenDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}

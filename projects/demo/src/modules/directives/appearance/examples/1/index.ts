import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiDropdown, TuiDropdownOpen} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiDropdown, TuiDropdownOpen],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}

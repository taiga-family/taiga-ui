import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiDropdownContextDirective,
    TuiDropdownDirective,
    TuiIcon,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiDropdownContextDirective, TuiDropdownDirective, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

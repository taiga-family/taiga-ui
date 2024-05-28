import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiDropdownContextDirective,
    TuiDropdownDirective,
    TuiSvgComponent,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiSvgComponent,
        TuiDropdownContextDirective,
        TuiDropdownDirective,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

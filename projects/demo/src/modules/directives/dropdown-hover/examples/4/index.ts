import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiGroupDirective,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiDropdownDirective,
        TuiDropdownHoverDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownOpenDirective,
        TuiGroupDirective,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

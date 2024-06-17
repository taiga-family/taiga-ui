import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownDirective, TuiDropdownHoverDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDropdownDirective, TuiDropdownHoverDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

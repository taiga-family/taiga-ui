import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownDirective, TuiDropdownSelectionDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDropdownDirective, TuiDropdownSelectionDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

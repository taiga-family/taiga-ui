import {Component} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiCheckboxComponent, TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected checked = false;
}

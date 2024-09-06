import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';
import {TuiAsideItemDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAsideItemDirective, TuiButton, TuiCheckbox],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected checked = false;
}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiButtonCloseDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiButtonCloseDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

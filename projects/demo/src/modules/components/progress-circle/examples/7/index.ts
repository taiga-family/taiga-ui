import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiProgressModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiProgressModule, TuiRepeatTimesDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

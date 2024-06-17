import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTagModule, TuiRepeatTimes],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected tag = 'Hello!';
}

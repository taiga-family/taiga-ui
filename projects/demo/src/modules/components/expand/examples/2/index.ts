import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiButton, TuiExpand, TuiRepeatTimes],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected expanded = false;
}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMessage, TuiShrinkWrap} from '@taiga-ui/kit';

@Component({
    imports: [TuiMessage, TuiShrinkWrap],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}

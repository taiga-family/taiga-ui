import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, TuiStatus} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiStatus],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

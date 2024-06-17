import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiBadgeDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiHint, TuiBadgeDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

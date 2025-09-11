import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiHint],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

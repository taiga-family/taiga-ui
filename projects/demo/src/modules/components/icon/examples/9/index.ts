import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTable],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

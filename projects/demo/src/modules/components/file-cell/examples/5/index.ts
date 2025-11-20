import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiButtonClose, TuiFileCell} from '@taiga-ui/kit';

@Component({
    imports: [TuiButtonClose, TuiFileCell, TuiIcon, TuiSwipeActions, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}

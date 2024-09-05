import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiOption} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiButtonClose, TuiOption],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiIconPipe} from '@taiga-ui/icons';
import {TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe, TuiSwitch, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

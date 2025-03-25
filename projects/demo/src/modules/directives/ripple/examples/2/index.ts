import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiRipple],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

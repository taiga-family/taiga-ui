import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiSurface} from '@taiga-ui/core';
import {TuiButtonGroup} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiButtonGroup, TuiSurface, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

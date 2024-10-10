import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiButtonGroup, TuiIconBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiButton, TuiButtonGroup, TuiIcon, TuiIconBadge],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

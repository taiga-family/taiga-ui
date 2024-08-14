import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiIcon, TuiIconPipe} from '@taiga-ui/core';

import {COLORED_ICONS, MONO_ICONS} from '../../../custom-icons';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe, NgForOf, TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly mono = MONO_ICONS;
    protected readonly colored = COLORED_ICONS;
}

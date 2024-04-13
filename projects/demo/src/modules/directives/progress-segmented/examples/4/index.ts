import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiLabelModule} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiProgressModule, TuiLabelModule, TuiAmountPipe, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

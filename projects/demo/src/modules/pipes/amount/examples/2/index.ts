import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiNumberFormatDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiNumberFormatDirective, TuiAmountPipe, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

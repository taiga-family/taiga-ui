import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [TuiAmountPipe, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

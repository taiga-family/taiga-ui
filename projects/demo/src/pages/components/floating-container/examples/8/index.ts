import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiFloatingContainer, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiFloatingContainer, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
})
export default class Example {}

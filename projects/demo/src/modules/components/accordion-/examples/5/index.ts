import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [TuiAccordion],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

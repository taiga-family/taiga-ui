import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-accordion-example-5',
    imports: [TuiAccordion],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAccordionExample5 {}

import {Component} from '@angular/core';
import {TuiAccordionModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-accordion-example-5',
    imports: [TuiAccordionModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAccordionExample5 {}

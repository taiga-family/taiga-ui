import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordionModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-accordion-example-1',
    imports: [TuiAccordionModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAccordionExample1 {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-scrollbar-example-2`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    encapsulation,
    changeDetection,
})
export class TuiScrollbarExample2Component {}

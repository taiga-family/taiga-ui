import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-scrollbar-example-5`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    changeDetection,
    encapsulation,
})
export class TuiScrollbarExample5Component {}

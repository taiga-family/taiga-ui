import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-spaces-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.style.less`],
    changeDetection,
    encapsulation,
})
export class TuiSpacingExample2 {}

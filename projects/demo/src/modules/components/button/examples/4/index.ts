import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `tui-button-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiButtonExample4 {}

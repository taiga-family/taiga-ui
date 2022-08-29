import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `tui-hint-describe-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
})
export class TuiHintDescribeExample1 {
    value = ``;
}

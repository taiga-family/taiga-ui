import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFlatLength} from '@taiga-ui/cdk';

@Component({
    selector: `tui-miscellaneous-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiMiscellaneousExample2 {
    get flatted(): number {
        return tuiFlatLength([
            [1, 2],
            [3, 4],
            [5, 6],
        ]);
    }
}

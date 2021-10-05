import {Component} from '@angular/core';
import {flatLength} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-miscellaneous-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiMiscellaneousExample2 {
    get flatted(): number {
        return flatLength([
            [1, 2],
            [3, 4],
            [5, 6],
        ]);
    }
}

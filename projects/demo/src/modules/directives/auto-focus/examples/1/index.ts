import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-auto-focus-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAutoFocusExample1 {
    showInput = false;
    model = 'Сфокусирован при появлении';

    onClick() {
        this.showInput = true;
    }
}

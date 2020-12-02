import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-dropdown-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDropdownExample1 {
    open = false;

    onClick() {
        this.open = !this.open;
    }

    onObscured(obscured: boolean) {
        if (obscured) {
            this.open = false;
        }
    }

    onActiveZone(active: boolean) {
        if (!active) {
            this.open = false;
        }
    }
}

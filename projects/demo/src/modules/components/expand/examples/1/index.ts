import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-expand-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiExpandExample1 {
    expanded = false;

    toggle() {
        this.expanded = !this.expanded;
    }
}

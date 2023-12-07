import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'tui-rating-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiRatingExample1 {
    rateControl = new UntypedFormControl(2);
    rateValue = 2;

    enableOrDisable(): void {
        if (this.rateControl.disabled) {
            this.rateControl.enable();
        } else {
            this.rateControl.disable();
        }
    }
}

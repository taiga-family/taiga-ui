import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';

@Component({
    selector: 'tui-manual-hint-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiManualHintExample1 {
    hintShown = false;

    toggleHint() {
        this.hintShown = !this.hintShown;
    }
}

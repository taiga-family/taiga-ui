import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-progress-segmented-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiProgressSegmentedExample3 {
    arrayColors = [
        '#39b54a',
        '#ffd450',
        '#ffd450',
        '#fcc521',
        '#fab619',
        '#f8a34d',
        '#e01f19',
    ];
}

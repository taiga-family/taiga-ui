import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-line-chart-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLineChartExample3 {
    readonly dotted = [
        [50, 50],
        [100, 75],
        [150, 50],
    ];

    readonly solid = [
        [150, 50],
        [200, 150],
        [250, 155],
    ];

    readonly dashed = [
        [250, 155],
        [300, 190],
        [350, 90],
    ];
}

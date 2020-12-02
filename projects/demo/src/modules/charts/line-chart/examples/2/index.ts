import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-line-chart-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLineChartExample2 {
    readonly value = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];
}

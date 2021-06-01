import {Component} from '@angular/core';
import {TuiLineHandler} from '@taiga-ui/addon-charts';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-axes-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiAxesExample1 {
    readonly axisXLabels = ['Jan 2019', 'Feb', 'Mar'];
    readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];
    readonly axisYSecondaryLabels = ['80 k', '100 k', '120 k'];
    readonly verticalLinesHandler: TuiLineHandler = (index, total) =>
        index === total - 1 ? 'none' : 'dashed';
}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiLineHandler} from '@taiga-ui/addon-charts';

@Component({
    selector: 'tui-axes-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAxesExample1 {
    protected readonly axisXLabels = ['Jan 2019', 'Feb', 'Mar'];
    protected readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];
    protected readonly axisYSecondaryLabels = ['80 k', '100 k', '120 k'];
    protected readonly verticalLinesHandler: TuiLineHandler = (index, total) =>
        index === total - 1 ? 'none' : 'dashed';
}

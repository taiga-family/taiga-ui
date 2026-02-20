import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, type TuiLineHandler} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiAxes],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly axisXLabels = ['Jan 2019', 'Feb', 'Mar', ''];
    protected readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];
    protected readonly axisYSecondaryLabels = ['80 k', '100 k', '120 k'];
    protected readonly verticalLinesHandler: TuiLineHandler = (index, total) =>
        (index && (index === total - 1 ? 'none' : 'dashed')) || 'solid';
}
`;export{t as default};

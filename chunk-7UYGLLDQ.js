import"./chunk-LQ6M4NCU.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiBarChart} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiAxes, TuiBarChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [
        [4000, -3000, 7000, -5000, 8000, -2000, 7000],
        [-2000, 5000, -7000, 3000, -1000, 6000, -4000],
    ];

    protected readonly labelsX = ['Jan 2021', 'Feb', 'Mar', 'Apr', ''];
    protected readonly labelsY = ['-10 000', '0', '10 000'];
}
`;export{a as default};

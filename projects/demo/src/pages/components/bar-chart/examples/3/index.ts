import {Component} from '@angular/core';
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
        [5400, -4200, 6800, -3100, 7200, -5600, 4900, -3800],
        [-3600, 6100, -4800, 5900, -2400, 6700, -5200, 4300],
    ];

    protected readonly labelsX = ['Jan 2021', 'Apr', 'Jul', 'Oct', ''];
    protected readonly labelsY = ['-10 000', '0', '10 000'];
}

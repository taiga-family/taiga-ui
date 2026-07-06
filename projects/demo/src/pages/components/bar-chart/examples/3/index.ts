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
        [5000, -5000, 8000, -3000, 6000],
        [-4000, 7000, -6000, 4000, -2000],
    ];

    protected readonly labelsX = ['Jan 2021', 'Feb', 'Mar', 'Apr', 'May', ''];
    protected readonly labelsY = ['-10 000', '0', '10 000'];
}

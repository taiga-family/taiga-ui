import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSet} from '@taiga-ui/addon-charts';

@Component({
    standalone: true,
    imports: [TuiBarSet],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [30, 45, 12, 6, 20];
}

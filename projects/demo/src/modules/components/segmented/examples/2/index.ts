import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFadeDirective, TuiSegmentedComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSegmentedComponent, TuiFadeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResizable, TuiResizer} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiResizable, TuiResizer],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

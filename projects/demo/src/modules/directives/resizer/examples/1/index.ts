import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResizeable, TuiResizer} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiResizeable, TuiResizer],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

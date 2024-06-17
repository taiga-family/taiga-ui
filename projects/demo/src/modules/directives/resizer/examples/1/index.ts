import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResizeableDirective, TuiResizerDirective} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiResizeableDirective, TuiResizerDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}

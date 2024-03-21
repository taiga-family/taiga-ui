import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLinkModule, TuiTitleDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTitleDirective, TuiLinkModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

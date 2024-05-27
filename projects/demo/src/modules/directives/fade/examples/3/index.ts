import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollableDirective, TuiScrollbarComponent} from '@taiga-ui/core';
import {TuiFadeDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiScrollbarComponent, TuiFadeDirective, TuiScrollableDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

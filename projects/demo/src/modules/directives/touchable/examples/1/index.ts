import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTouchableDirective} from '@taiga-ui/addon-mobile';
import {TuiIslandModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIslandModule, TuiTouchableDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

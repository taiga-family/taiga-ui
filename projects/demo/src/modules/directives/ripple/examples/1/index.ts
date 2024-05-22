import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRippleDirective} from '@taiga-ui/addon-mobile';
import {TuiIslandModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIslandModule, TuiRippleDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIslandModule, TuiLinkDirective, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

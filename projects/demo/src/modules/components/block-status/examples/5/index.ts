import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiBlockStatusModule} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBlockStatusModule, TuiButtonDirective, TuiPlatformModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

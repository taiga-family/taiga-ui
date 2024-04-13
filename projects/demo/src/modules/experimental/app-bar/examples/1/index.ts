import {Component} from '@angular/core';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAppBarModule} from '@taiga-ui/experimental';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiAppBarModule, TuiButtonDirective, TuiPlatformModule, TuiTitleDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

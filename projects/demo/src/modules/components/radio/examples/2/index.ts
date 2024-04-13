import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiRadioComponent, TuiRadioDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiPlatformModule,
        TuiRadioComponent,
        TuiRadioDirective,
        TuiLabelDirective,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value: any = null;
    protected identityMatcher = (a: any, b: any): boolean => a?.test === b?.test;
}

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import {TuiRadio} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiPlatform, TuiRadio, TuiLabel, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: any = null;
    protected identityMatcher = (a: any, b: any): boolean => a?.test === b?.test;
}

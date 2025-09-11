import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiTime} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputTime, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiTime | null = null;
}

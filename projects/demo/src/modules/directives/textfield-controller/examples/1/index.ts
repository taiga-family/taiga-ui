import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTextfield, TuiPrimitiveTextfieldModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}

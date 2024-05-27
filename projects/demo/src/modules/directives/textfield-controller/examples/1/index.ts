import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPrimitiveTextfieldModule, TuiTextfieldOptionsDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTextfieldOptionsDirective, TuiPrimitiveTextfieldModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

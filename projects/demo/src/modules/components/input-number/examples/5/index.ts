import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormatDirective, tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputNumberModule,
        TuiTextfieldControllerModule,
        TuiNumberFormatDirective,
        FormsModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiNumberFormatProvider({decimalSeparator: ',', thousandSeparator: '.'})],
})
export default class ExampleComponent {
    protected value = 123.56;
}

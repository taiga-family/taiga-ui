import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintOptionsDirective, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputTagModule,
        TuiTextfieldControllerModule,
        TuiHintOptionsDirective,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = ['گراهام چپمن', 'جان کلیز'];
}

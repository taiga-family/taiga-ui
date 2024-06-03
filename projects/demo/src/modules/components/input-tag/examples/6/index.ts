import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiGroupDirective,
    TuiHintOptionsDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputModule, TuiInputTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiGroupDirective,
        TuiHintOptionsDirective,
        TuiTextfieldControllerModule,
        TuiInputModule,
        TuiInputTagModule,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = ['not', 'unique', 'tags, with', 'custom', 'separator', 'separator'];
    protected customSeparator = ';';
}

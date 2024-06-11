import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintOptionsDirective, TuiIconComponent} from '@taiga-ui/core';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputSliderModule,
        TuiHintOptionsDirective,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiIconComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected userAnswer = 2;
}

import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiRadio, tuiRadioOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiLabel, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiRadioOptionsProvider({
            appearance: (el) => (el.checked ? 'primary-grayscale' : 'outline-grayscale'),
        }),
    ],
})
export default class Example {
    protected value = '1';
}

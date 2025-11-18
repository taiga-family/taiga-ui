import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButton, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly keyboard = inject(TuiKeyboardService);
    protected value = '';
}

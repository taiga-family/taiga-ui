import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputColor, tuiInputColorOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputColor, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiInputColorOptionsProvider({format: 'hexa', align: 'right'})],
})
export default class Example {
    protected value = '#ff7f50cc';
}

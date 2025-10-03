import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIconPipe} from '@taiga-ui/core';
import {TuiNotificationMiddle} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiIconPipe, TuiNotificationMiddle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected text = false;
    protected icon = false;
}

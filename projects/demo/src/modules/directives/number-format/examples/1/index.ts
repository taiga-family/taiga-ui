import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatNumberPipe, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiFormatNumberPipe,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 123456.789;
}

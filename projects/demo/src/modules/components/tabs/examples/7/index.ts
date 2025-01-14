import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, TuiScrollbar, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiInputNumber,
        TuiNumberFormat,
        TuiScrollbar,
        TuiTabs,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected horizontalActiveIndex = 9;
    protected verticalActiveIndex = 10;
}

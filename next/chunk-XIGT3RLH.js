import"./chunk-HU6DUUP4.js";var t=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiChevron, TuiComboBox, TuiDataListWrapper],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Medical Expenses',
        'Education',
        'Travel',
        'Home Repair',
        'Car',
    ];

    protected control = new FormControl<string | null>(null);
}
`;export{t as default};

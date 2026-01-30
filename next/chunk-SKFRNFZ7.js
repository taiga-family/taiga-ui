import"./chunk-B4AJQJMI.js";var t=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSlider} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiSlider],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly formControl = new FormControl(60);
}
`;export{t as default};

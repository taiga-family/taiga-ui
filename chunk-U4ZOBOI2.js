import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiTextarea],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected control = new FormControl(
        'Adding [limit] directive allows you to display a counter of symbols inside the textarea, highlight excessive characters in red and also automatically add Validators.maxlength(x) validator',
    );

    constructor() {
        this.control.markAsTouched();
    }
}
`;export{e as default};

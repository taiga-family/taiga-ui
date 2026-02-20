import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiDropdown, TuiTextarea],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected form = new FormGroup({reportText: new FormControl('Misspell HERE!')});

    protected report(): void {
        console.info(this.form.value);
    }
}
`;export{t as default};

import"./chunk-42JZD6NG.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiRange],
    templateUrl: './index.html',
    styles: ':host {display: flex; flex-direction: column;}',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [4, 6];

    protected readonly formControl = new FormControl([4, 6]);
}
`;export{t as default};

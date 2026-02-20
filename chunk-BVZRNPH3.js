import"./chunk-HU6DUUP4.js";var e=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiInput} from '@taiga-ui/core';
import {TuiItemsWithMore} from '@taiga-ui/kit';
import {TuiSearch} from '@taiga-ui/layout';

@Component({
    imports: [
        JsonPipe,
        ReactiveFormsModule,
        TuiButton,
        TuiInput,
        TuiItemsWithMore,
        TuiSearch,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly filters = new FormArray(
        Array.from({length: 5}, () => new FormControl()),
    );

    protected readonly form = new FormGroup({filters: this.filters});
}
`;export{e as default};

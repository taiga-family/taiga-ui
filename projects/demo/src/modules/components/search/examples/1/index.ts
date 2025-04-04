import {JsonPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearch} from '@taiga-ui/beaver';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        JsonPipe,
        NgForOf,
        ReactiveFormsModule,
        TuiButton,
        TuiItemsWithMore,
        TuiSearch,
        TuiTextfield,
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
    protected readonly controls = EMPTY_QUERY;
}

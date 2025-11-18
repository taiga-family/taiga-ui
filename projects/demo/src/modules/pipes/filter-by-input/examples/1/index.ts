import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiLabel, TuiTextfield} from '@taiga-ui/core';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiLabel,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly form = new FormGroup({
        user: new FormControl(''),
    });
}

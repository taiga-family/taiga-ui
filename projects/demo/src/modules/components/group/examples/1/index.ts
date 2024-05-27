import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiErrorComponent,
    TuiGroupDirective,
    TuiHintOptionsDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiFieldErrorPipeModule} from '@taiga-ui/kit';
import {TuiInputModule, TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiGroupDirective,
        TuiInputModule,
        TuiHintOptionsDirective,
        TuiErrorComponent,
        TuiFieldErrorPipeModule,
        AsyncPipe,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = ['Option 1', 'Option 2', 'Option 3'];

    protected testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
        multiSelectControl: new FormControl<string[]>([], Validators.required),
        testValue3: new FormControl('', Validators.required),
    });
}

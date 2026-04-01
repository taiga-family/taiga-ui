import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiGroup, TuiIcon, TuiInput} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
    TuiTooltip,
} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiError,
        TuiGroup,
        TuiIcon,
        TuiInput,
        TuiInputChip,
        TuiMultiSelect,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Option 1', 'Option 2', 'Option 3'];
    protected readonly form = new FormGroup({
        value: new FormControl('', Validators.required),
        multi: new FormControl<string[]>([], Validators.required),
        number: new FormControl('', Validators.required),
    });
}
`;export{e as default};

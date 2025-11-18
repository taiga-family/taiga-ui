import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidator} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiInputPhone, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInputPhone,
        TuiSelect,
        TuiTextfield,
        TuiValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Email', 'Phone'];

    protected type = this.items[0]!;

    protected readonly group = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormControl('', Validators.required),
    });

    protected readonly validator = Validators.email;
}

import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiDropdown, TuiTextfield} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiDropdown,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('');
    protected readonly items = inject<readonly string[]>('Pythons' as any);

    protected readonly disabledItemHandler: TuiBooleanHandler<string> = (v) =>
        v.startsWith('T');
}

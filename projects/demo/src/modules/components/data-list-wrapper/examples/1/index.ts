import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiDataListWrapperModule, TuiFilterByInputPipeModule} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        ReactiveFormsModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl('');

    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected readonly disabledItemHandler: TuiBooleanHandler<string> = v =>
        v.startsWith('T');
}

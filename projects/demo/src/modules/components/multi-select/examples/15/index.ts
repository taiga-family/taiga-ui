import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiDataListWrapper, tuiItemsHandlersProvider} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Status {
    name: string;
}

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiItemsHandlersProvider({
            identityMatcher: (controlValue: {name: string}, item: {name: string}) =>
                controlValue.name === item.name,
            stringify: (item: {name: string}): string => `${item.name}`,
        }),
    ],
})
export default class Example {
    protected open = false;

    protected readonly items: readonly Status[] = [
        {name: 'Drafts'},
        {name: 'In Progress'},
        {name: 'Completed'},
    ];

    protected readonly form = new FormGroup({
        control: new FormControl<readonly Status[]>([{name: 'Drafts'}]),
    });

    protected get length(): number {
        return this.form.controls.control.value?.length || 0;
    }
}

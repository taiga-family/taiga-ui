import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListDirective} from '@taiga-ui/core';
import {TuiDataListWrapperComponent, tuiItemsHandlersProvider} from '@taiga-ui/kit';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Employee {
    readonly dept: {
        readonly id: number;
        readonly title: string;
    };
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        TuiSelectModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiDataListWrapperComponent,
        TuiDataListDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiItemsHandlersProvider({
            stringify: (item: Employee) => `${item.name} (${item.dept.title})`,
        }),
    ],
})
export default class ExampleComponent {
    protected readonly testValue = new FormControl<Employee | null>(null);

    protected readonly items: readonly Employee[] = [
        {id: 42, name: 'John Cleese', dept: {id: 566, title: 'Financial'}},
        {id: 237, name: 'Eric Idle', dept: {id: 560, title: 'Staffing'}},
        {id: 666, name: 'Michael Palin', dept: {id: 566, title: 'Financial'}},
        {id: 123, name: 'Terry Gilliam', dept: {id: 500, title: 'Administrative'}},
        {id: 777, name: 'Terry Jones', dept: {id: 566, title: 'Financial'}},
        {id: 999, name: 'Graham Chapman', dept: {id: 560, title: 'Staffing'}},
    ];
}

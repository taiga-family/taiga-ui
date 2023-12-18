import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiItemsHandlersProvider} from '@taiga-ui/kit';

interface Employee {
    readonly dept: {
        readonly id: number;
        readonly title: string;
    };
    readonly id: number;
    readonly name: string;
}

@Component({
    selector: 'tui-select-example-10',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiItemsHandlersProvider({
            stringify: (item: Employee) => `${item.name} (${item.dept.title})`,
        }),
    ],
})
export class TuiSelectExample10 {
    readonly testValue = new UntypedFormControl(null);

    readonly items: readonly Employee[] = [
        {id: 42, name: 'John Cleese', dept: {id: 566, title: 'Financial'}},
        {id: 237, name: 'Eric Idle', dept: {id: 560, title: 'Staffing'}},
        {id: 666, name: 'Michael Palin', dept: {id: 566, title: 'Financial'}},
        {id: 123, name: 'Terry Gilliam', dept: {id: 500, title: 'Administrative'}},
        {id: 777, name: 'Terry Jones', dept: {id: 566, title: 'Financial'}},
        {id: 999, name: 'Graham Chapman', dept: {id: 560, title: 'Staffing'}},
    ];
}

import {AsyncPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiDropdown, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiAvatar,
    TuiChevron,
    TuiDataListWrapper,
    TuiFade,
    TuiFilterByInputPipe,
    TuiInputNumber,
    TuiSelect,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {
    TuiComboBoxModule,
    TuiMultiSelectModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {map} from 'rxjs';

interface User {
    readonly url: string;
    readonly name: string;
    readonly balance: number;
}

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiChevron,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiDropdown,
        TuiDropdownMobile,
        TuiFade,
        TuiFilterByInputPipe,
        TuiInputNumber,
        TuiMultiSelectModule,
        TuiSelect,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected country = null;
    protected selected: readonly User[] = [];
    protected sum = null;
    protected user: User | null = null;

    protected readonly open = signal(false);

    protected readonly countries$ = inject(TUI_COUNTRIES).pipe(map(Object.values));

    protected readonly users: readonly User[] = [
        {name: 'Alex Inkin', balance: 1323525, url: assets`/images/avatar.jpg`},
        {name: 'Roman Sedov', balance: 523242, url: 'RS'},
        {name: 'Vladimir Potekhin', balance: 645465, url: 'VP'},
        {name: 'Nikita Barsukov', balance: 468468, url: 'NB'},
        {name: 'Maxim Ivanov', balance: 498654, url: 'MI'},
    ];

    protected readonly stringify = ({name}: User): string => name;
}

import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDropdownMobile, TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiDropdown, TuiTitle} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiAvatar,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFade,
    TuiFilterByInputPipe,
    TuiInitialsPipe,
    TuiInputChip,
    TuiInputNumber,
    TuiMultiSelect,
    TuiSelect,
} from '@taiga-ui/kit';

interface User {
    readonly url?: string;
    readonly name: string;
    readonly balance: number;
}

@Component({
    imports: [
        FormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDropdown,
        TuiDropdownMobile,
        TuiDropdownSheet,
        TuiFade,
        TuiFilterByInputPipe,
        TuiInitialsPipe,
        TuiInputChip,
        TuiInputNumber,
        TuiMultiSelect,
        TuiSelect,
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

    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());

    protected readonly users: readonly User[] = [
        {name: 'Alex Inkin', balance: 1323525, url: assets`/images/avatar.jpg`},
        {name: 'Roman Sedov', balance: 523242},
        {name: 'Vladimir Potekhin', balance: 645465},
        {name: 'Nikita Barsukov', balance: 468468},
        {name: 'Maxim Ivanov', balance: 498654},
    ];

    protected readonly stringify = ({name}: User): string => name;
}

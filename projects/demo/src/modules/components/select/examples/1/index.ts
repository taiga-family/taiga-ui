import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiChevron,
        TuiDataListWrapper,
        TuiIcon,
        TuiSelect,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly users = [
        'Alex Inkin',
        'Vladimir Potekhin',
        'Nikita Barsukov',
        'Maxim Ivanov',
        'German Panov',
    ];

    protected value: string | null = null;
}

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip, TuiMultiSelect} from '@taiga-ui/kit';

import {CustomListComponent} from './custom-list';

const INCOME = {
    name: 'Income',
    items: [
        'Donations',
        'Product placement',
        'Sponsorship',
        'Found on the street',
        'Unexpected inheritance',
        'Investments',
        'Color copier',
    ],
};

const EXPENSES = {
    name: 'Expenses',
    items: [
        'Energy drinks',
        'Coffee',
        'Ramen',
        'Bills',
        'Back medicine',
        'Warhammer 40000 figurines',
    ],
};

@Component({
    imports: [
        CustomListComponent,
        FormsModule,
        TuiDataList,
        TuiTextfield,
        TuiInputChip,
        TuiMultiSelect,
        TuiChevron,
    ],
    templateUrl: './index.html',
    styles: [
        `
            .control {
                width: 320px;
            }
        `,
    ],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [];

    protected readonly items = [INCOME, EXPENSES];

    protected readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (
        items1,
        items2,
    ) => items1.length === items2.length && items1.every((item) => items2.includes(item));
}

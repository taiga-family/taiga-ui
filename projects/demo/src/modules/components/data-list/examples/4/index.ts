import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiDataList, TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip, TuiSelect} from '@taiga-ui/kit';

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
        TuiSelect,
        TuiSelectLike,
        TuiChevron,
    ],
    templateUrl: './index.html',
    styles: `
        .control {
            width: 320px;
        }
    `,
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = [];

    protected readonly items = [INCOME, EXPENSES];

    protected get content(): string {
        if (!this.value.length) {
            return '';
        }

        const equalsSelection = (list: readonly string[]): boolean =>
            list.length === this.value.length &&
            list.every((item) => this.value.includes(item));

        const allItems = this.items.flatMap((group) => group.items);

        if (equalsSelection(allItems)) {
            return 'All';
        }

        const category = this.items.find((group) => equalsSelection(group.items));

        return category ? `${category.name} only` : `Selected: ${this.value.length}`;
    }

    protected readonly identityMatcher: TuiIdentityMatcher<unknown> = (a, b) =>
        Array.isArray(a) && Array.isArray(b)
            ? a.length === b.length && a.every((x) => b.includes(x))
            : a === b;
}

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext, TuiIdentityMatcher, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDataListDirective} from '@taiga-ui/core';
import {TuiSelectModule} from '@taiga-ui/legacy';

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
    standalone: true,
    imports: [TuiSelectModule, FormsModule, CustomListComponent, TuiDataListDirective],
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
    ) => items1.length === items2.length && items1.every(item => items2.includes(item));

    protected readonly valueContent: TuiStringHandler<TuiContext<readonly string[]>> = ({
        $implicit,
    }) => {
        if (!$implicit.length) {
            return 'All';
        }

        const selected = this.items.find(({items}) =>
            this.identityMatcher($implicit, items),
        );

        return selected ? `${selected.name} only` : `Selected: ${$implicit.length}`;
    };
}

import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiArrayRemove} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand} from '@taiga-ui/core';
import {TuiChevron, TuiElasticContainerComponent} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiElasticContainerComponent,
        NgForOf,
        TuiChevron,
        TuiExpand,
        TuiInputModule,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        {
            expanded: false,
            value: 'Test 1',
        },
        {
            expanded: false,
            value: 'Test 2',
        },
    ];

    protected add(): void {
        this.items = this.items.concat({expanded: false, value: 'New value'});
    }

    protected remove(index: number): void {
        this.items = tuiArrayRemove(this.items, index);
    }
}

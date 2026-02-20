import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiArrayRemove} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand, TuiInput} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';
import {TuiElasticContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiChevron,
        TuiElasticContainer,
        TuiExpand,
        TuiInput,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
`;export{i as default};

import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiChevron, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly state: Record<number, boolean> = {};
    protected readonly data = [
        {
            dob: new TuiDay(1947, 6, 30),
            name: 'John Matrix',
            children: [
                {
                    dob: new TuiDay(1975, 6, 15),
                    name: 'Jenny Matrix',
                },
            ],
        },
        {
            dob: new TuiDay(1946, 6, 4),
            name: 'John Rambo',
            children: [],
        },
        {
            dob: new TuiDay(1955, 2, 19),
            name: 'John McClane',
            children: [
                {
                    dob: new TuiDay(1982, 7, 10),
                    name: 'Lucy McClane',
                },
                {
                    dob: new TuiDay(1985, 3, 5),
                    name: 'Jack McClane',
                },
            ],
        },
    ] as const;
}
`;export{o as default};

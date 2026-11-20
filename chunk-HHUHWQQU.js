import"./chunk-LQ6M4NCU.js";var t=`import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiInput, TuiPopup, TuiTitle} from '@taiga-ui/core';
import {TuiDrawer, TuiFormatNumberPipe} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

interface Item {
    name: string;
    readonly balance: number;
}

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiDrawer,
        TuiFormatNumberPipe,
        TuiHeader,
        TuiInput,
        TuiPopup,
        TuiTable,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data: readonly Item[] = [
        {name: 'Alex Inkin', balance: 1323525},
        {name: 'Roman Sedov', balance: 423242},
    ];

    protected readonly edited = signal<Item | null>(null);
}
`;export{t as default};

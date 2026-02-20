import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiButton, TuiFormatNumberPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapper, TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiDataListWrapper,
        TuiFormatNumberPipe,
        TuiPagination,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        {
            name: 'Alex Inkin',
            balance: 1323525,
        },
        {
            name: 'Roman Sedov',
            balance: 423242,
        },
    ] as const;

    protected index = 4;
    protected length = 10;
    protected size = 10;
    protected readonly items = [10, 50, 100];
    protected readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>
        \`\${$implicit} items per page\`;
}
`;export{i as default};

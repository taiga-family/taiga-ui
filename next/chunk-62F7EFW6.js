import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip, TuiMultiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataList,
        TuiInputChip,
        TuiMultiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = [];

    protected items = [
        {nickname: 'a.inkin', name: 'Alex Inkin'},
        {nickname: 'r.sedov', name: 'Roman Sedov'},
    ];

    protected readonly stringify = (value: string): string =>
        this.items.find((item) => item.nickname === value)?.name ?? '';
}
`;export{i as default};

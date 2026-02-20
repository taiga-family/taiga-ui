import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect, TuiMultiSelect} from '@taiga-ui/kit';

interface User {
    readonly id: number;
    readonly name: string;
}

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiDataList,
        TuiDropdown,
        TuiMultiSelect,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: User[] = [
        {id: 42, name: 'Tommy Vercetti'},
        {id: 237, name: 'Carl Johnson'},
        {id: 666, name: 'Niko Bellic'},
        {id: 999, name: 'Trevor Philips'},
        {id: 123, name: 'Michael De Santa'},
        {id: 777, name: 'Franklin Clinton'},
    ];

    protected value = this.items;
}
`;export{i as default};

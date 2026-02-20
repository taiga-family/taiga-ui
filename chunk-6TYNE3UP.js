import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatNumberPipe, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiChevron,
    TuiDataListWrapper,
    TuiItemsWithMore,
    TuiSelect,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiChevron,
        TuiDataListWrapper,
        TuiFormatNumberPipe,
        TuiItemsWithMore,
        TuiSelect,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = [
        {
            name: 'Very very long account name',
            number: '1234 5678 9101 2345',
            value: 12345678,
        },
        {
            name: 'Short title',
            number: '8888 8888 8888 8888',
            value: 237,
        },
        {
            name: 'Taiga UI is a super awesome library',
            number: '4444 3333 2222 1111',
            value: 76543,
        },
    ];

    protected value = this.items[0];
}
`;export{i as default};

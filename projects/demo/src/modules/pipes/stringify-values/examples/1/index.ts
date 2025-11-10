import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiStringifyValuesPipe,
    TuiValuesPipe,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        JsonPipe,
        TuiChevron,
        TuiDataListWrapper,
        TuiSelect,
        TuiStringifyValuesPipe,
        TuiTextfield,
        TuiValuesPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;

    protected readonly items = [
        {
            id: 1,
            name: 'Main mailbox',
            email: 'admin@my-server.com',
        },
        {
            id: 2,
            name: 'Secondary mailbox',
            email: 'for-spam@my-server.org',
        },
    ] as const;
}

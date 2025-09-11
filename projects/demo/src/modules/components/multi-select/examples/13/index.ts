import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper, TuiFade} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    imports: [FormsModule, TuiDataListWrapper, TuiFade, TuiMultiSelectModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: readonly string[] = [
        'I am a very very long item that definitely overflows',
    ];

    protected value: readonly string[] = [];
}

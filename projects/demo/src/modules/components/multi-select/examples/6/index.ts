import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiDataListWrapper,
        TuiDataList,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: readonly string[] = [
        'گراهام چپمن',
        'جان کلیز',
        'تری گیلیام',
        'اریک آیدل',
        'تری جونز',
        'مایکل پیلین',
    ];

    protected value: readonly string[] = [this.items[0]];
}

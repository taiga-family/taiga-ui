import {NgForOf} from '@angular/common';
import {Component, Directive} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsOptionContent, TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Directive({
    standalone: true,
    selector: '[moreOption]',
    providers: [tuiAsOptionContent(null)],
})
export class MoreOption {}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiButton,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        MoreOption,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly mainOptions: readonly string[] = [
        'Item #1',
        'Item #2',
        'Item #3',
        'Item #4',
        'Item #5',
    ];

    public readonly moreOptions: readonly string[] = ['Item #6', 'Item #7', 'Item #8'];

    public value: readonly string[] = [this.mainOptions[2], this.moreOptions[1]];
}

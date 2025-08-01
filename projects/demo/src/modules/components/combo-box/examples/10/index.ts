import {ScrollingModule} from '@angular/cdk/scrolling';
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiDataList, TuiScrollable, TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgIf,
        ScrollingModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiLet,
        TuiScrollable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    protected value = null;
}

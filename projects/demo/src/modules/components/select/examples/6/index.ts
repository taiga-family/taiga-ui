import {ScrollingModule} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiScrollable, TuiTextfield} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiSelect} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        ScrollingModule,
        TuiChevron,
        TuiDataList,
        TuiScrollable,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries = inject(TUI_COUNTRIES).pipe(map(Object.values));
    protected value = null;
}

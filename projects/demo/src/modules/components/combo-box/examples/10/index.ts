import {ScrollingModule} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiScrollable, TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        ScrollingModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiScrollable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());

    protected value = null;
}

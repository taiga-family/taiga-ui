import {AsyncPipe} from '@angular/common';
import {Component, computed, inject, type Signal, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected readonly countries: Signal<string[]> = computed(() =>
        Object.values(inject(TUI_COUNTRIES)),
    );

    protected value: string | null = null;
}

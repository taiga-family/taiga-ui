import {AsyncPipe} from '@angular/common';
import {Component, inject, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDropdownMobile,
    tuiDropdownMobileOptionsProvider,
} from '@taiga-ui/addon-mobile';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

const STICKY_HEADER_HEIGHT_PX = 67;

@Component({
    standalone: true,
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
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [
        tuiDropdownMobileOptionsProvider({
            topShift: STICKY_HEADER_HEIGHT_PX + 16,
        }),
    ],
})
export default class Example {
    protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    protected value: string | null = null;
}

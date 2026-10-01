import {AsyncPipe} from '@angular/common';
import {Component, inject, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiProgress,
} from '@taiga-ui/kit';
import {TuiAppBar, TuiHeader} from '@taiga-ui/layout';
import {map, type Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAppBar,
        TuiButton,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDialog,
        TuiDropdownMobile,
        TuiFilterByInputPipe,
        TuiHeader,
        TuiProgress,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    protected open = false;
    protected value: string | null = null;
}

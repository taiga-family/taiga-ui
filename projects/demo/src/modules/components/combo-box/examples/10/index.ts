import {ScrollingModule} from '@angular/cdk/scrolling';
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSearchHandler} from '@taiga-ui/cdk';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiDataList, TuiScrollable, TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
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
    protected readonly countries = toSignal(
        inject(TUI_COUNTRIES).pipe(map((x) => Object.values(x))),
        {initialValue: [] as string[]},
    );

    protected search = computed<TuiSearchHandler<string>>(
        (items = this.countries()) =>
            (query) =>
                items.find((x) => x.toLowerCase() === query.toLowerCase()),
    );

    protected value = null;
}
